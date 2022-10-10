const { User, Thought } = require( '../models' );

module.exports = {
    getAllUsers: async ( req, res ) => {
        try {
            const users = await User.find();
            res.json( users );
        } catch ( err ) {
            console.log( err );
            return res.status(500).json( err );
        }
    },
    getSingleUser: async ( req, res ) => {
        try {
            const user = await User.findById( req.params.id )
                .populate( 'friends thoughts' );
            !user 
            ? res.status(404).json( { message: `User with id: ${ req.params.id } does not exist!` } )
            : res.json( user );
        } catch ( err ) {
            console.log( err );
            return res.status(500).json( err );
        }
    },
    createNewUser: async ( req, res ) => {
        try {
            const newUser = await User.create( req.body );
            res.json( newUser );
        } catch ( err ) {
            console.log( err );
            return res.status(500).json( err );
        }
    },
    updateUser: async ( req, res ) => {
        try {
            const user = await User.findOneAndUpdate( 
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            );
            !user
            ? res.status(404).json( { message: `User with id: ${ req.params.id } does not exist!` } )
            : res.json( user );

        } catch ( err ) {
            console.log( err );
            return res.status(500).json( err );
        }
    },
    deleteUser: async ( req, res ) => {
        try {
            const deletedUser = await User.findOneAndDelete( { _id: req.params.id } );
            !deletedUser 
            ? res.status(404).json( { message: `User with id: ${ req.params.id } does not exist!` } )
            : await Thought.deleteMany( { _id: { $in: deletedUser.thoughts } } );
            res.status(200).json( { message: `User ${ deletedUser.username } and all associated thoughts deleted!` } );
        } catch ( err ) {
            console.log( err );
            return res.status(500).json( err );
        }
    },
    addFriend: async ( req, res ) => {
        try {
            const friend = ( await User.findById(  req.params.friendId ) );
            if ( !friend ) {
                res.status(404).json( { message: `Friend id invalid! could not find user with id: ${ req.params.friendId }` } );
                return;
            } 
            const user = await User.findOneAndUpdate( 
                { _id: req.params.userId },
                { $addToSet: { friends: friend._id } },
                { runValidators: true, new: true }
            );
            !user
            ? res.status(404).json( { message: `User with id: ${ req.params.userId } does not exist!` } )
            : res.status(200).json( user );


        } catch ( err ) {
            console.log( err );
            return res.status(500).json( err );
        }
    },
    removeFriend: async ( req, res ) => {
        const user = await User.findOneAndUpdate( 
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
         );
         !user
         ? res.status(404).json( { message: `User with id: ${ req.params.userId } does not exist!` } )
         : res.status(200).json( user );
    }
}