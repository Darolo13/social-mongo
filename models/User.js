const { Schema, model } = require('mongoose');
import { isEmail } from 'validator';


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
            required: 'Email adress is required!',
            validate: [ isEmail, 'Please enter a valid email address!' ],
        }
    }
);

const User = model('User', UserSchema);

module.exports = User;