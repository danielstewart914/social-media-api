const { Schema, Types } = require( 'mongoose' );

const formatDateTime = require( '../utils/formatDateTime' );

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDateTime
        }
    },
    {
        id: false
    }
);

module.exports = reactionSchema;