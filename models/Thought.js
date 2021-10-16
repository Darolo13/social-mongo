const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
// reaction schema goes here

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'This field is required!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
        },
      //  Array of nested documents created with the reactionSchema goes here
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// reactionCount goes here

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;