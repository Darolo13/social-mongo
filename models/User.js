const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email address is required!',
            validate: [isEmail, 'Please enter a valid email address!'],
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
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const User = model('User', UserSchema);

module.exports = User;