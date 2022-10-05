const { Schema, model } = require( 'mongoose' );
const reactionSchema = require( './Reaction' );

const formatDateTime = timestamp => {
    const date = new Date( timestamp );
    return date.toLocaleDateString( 'en-us' ) + ' ' + date.toLocaleTimeString( 'en-us' );
}

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDateTime
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

thoughtSchema.virtual( 'reactionCount' )
    .get( function() {
        return this.reactions.length;
    });

const Thought = model( 'Thought', thoughtSchema );

module.exports = Thought;