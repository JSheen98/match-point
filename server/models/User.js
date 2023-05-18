const { Schema, model } = require('mongoose');

// TODO: use bcrypt to check existing pws and hash new ones

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
            type: String
        },
        team: [{
            type: Schema.Types.ObjectId,
            ref: 'Team',
        }]
    }
);

const User = model('User', userSchema);

model.exports = User;