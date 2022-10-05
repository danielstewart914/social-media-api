const { Schema, model } = require( 'mongoose' );

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [ /^[a-z0-9._%+-]{1,64}@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i, 'Please give a valid email address!' ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual( 'friendCount' )
    .get( function() {
        return this.friends.length;
    } );

const User = model( 'User', userSchema );

module.exports = User;