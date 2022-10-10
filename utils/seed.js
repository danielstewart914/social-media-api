const { Types } = require('mongoose');
const connection = require( '../config/connection' );
const { User, Thought } = require( '../models' );
const userData = require( './users.json' );
const words = require( './words.json' );

connection.on( 'error', (err) => err );

const seedFriends = async ( users ) => {
    let friendIndex;
    let duplicate

    for ( const i in users ) {
        const friendsArray = [];
        for ( let j = 0; j < Math.floor( Math.random() * 6 ); j++ ) {
            do {
                friendIndex = Math.floor( Math.random() * users.length );
                duplicate  = friendsArray.find( friend => friend === users[friendIndex]._id );
            } while ( friendIndex == i || duplicate );
            friendsArray.push(users[friendIndex]._id);
        }
        await User.updateOne( { _id: users[i]._id }, {
            $push: { friends: { $each: friendsArray } }
        } )
    }
}

const randomIndex = array => Math.floor( Math.random() * array.length );
const getRandomWord = () => words[randomIndex(words)];

const genRandomSentence = ( min, max ) => {
    let thought = '';
    // create random post length between min and max
    const postLength = Math.random() * ( max - min ) + min;
    for ( let i = 0; i < postLength; i++) {
        if ( i !== 0 ) thought += ` ${ getRandomWord() }`;
        else thought += `${ getRandomWord() }`;
    }
    return thought;
}

const seedThoughts = async ( users ) => {
    for ( const user of users ) {
        const thoughtsArray = [];
        for ( let i = 0; i < Math.floor( Math.random() * 6 ); i++ ) {
            const reactionArray = [];
            for ( let j = 0; j < Math.floor( Math.random() * 5 ); j++ ) {
                reactionArray.push ( {
                    reactionId: new Types.ObjectId(),
                    reactionBody: genRandomSentence( 3, 5 ),
                    username: users[randomIndex( users )].username
                } );
            }
            const thought = {
                thoughtText: genRandomSentence( 10, 20 ),
                username: user.username,
                reactions: reactionArray
            }
            const newThought = await Thought.create( thought );
            thoughtsArray.push( newThought._id );
        }
        await User.updateOne( 
            { _id: user._id }, { 
            $push: { thoughts: { $each: thoughtsArray } } 
        } );
    }
}

connection.once( 'open', async () => {
    console.log( 'connected' );

    await User.deleteMany();
    await Thought.deleteMany();

    const users = await User.insertMany( userData );
    console.log( '===== USERS CREATED =====' );
    await seedFriends( users );
    console.log( '===== FRIENDS SEEDED =====' );
    await seedThoughts( users );
    console.log( '===== THOUGHTS AND REACTIONS SEEDED =====' );

    console.info( 'Seeding complete!' );
    process.exit(0);
} );