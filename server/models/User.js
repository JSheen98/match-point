const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

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
        events: [{
            type: Schema.Types.ObjectId,
            ref: 'Events',
        }],
        team: [{
            type: Schema.Types.ObjectId,
            ref: 'Team',
        }]
    }
);

// hash password function on creation or update of user
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }

    next()
})

// compares the db password and pw from login form
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;