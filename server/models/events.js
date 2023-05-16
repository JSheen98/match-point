const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
    {
        name: {
            type: String,
            unique: false,
            required: true,
            trim: true
        },
        date: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        time: {
            type: String,
            required: true,
            unique: false
        },
        team1: {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        },
        team2: {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }
    }
);

const Events = model('Events', eventSchema);

model.exports = Events;