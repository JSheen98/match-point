const { Schema, model } = require('mongoose');

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
            match: [/.+\@.+\..+/]
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        phoneNumber: {
            type: Number
        },
        team: [{
            type: Schema.Types.ObjectId,
            ref: 'Team',
        }]
    }
);

const User = model('User', userSchema);

model.exports = User;