const { Schema, model } = require('mongoose');

// event model
const eventSchema = new Schema(
    {
        name: {
            type: String,
            unique: false,
            required: true,
            trim: true
        },
        sport: {
            type: String,
            unique: false,
            required: true,
            trim: true
        },
        location: {
            type: String,
            required: true,
            unique: false,
            trim: true  
        },
        date: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        // Puts the event creators username here when a new one is created
        eventCreator: {
            type: String,
            required: true,
            trim: true
        }
    }
);

const Events = model('Events', eventSchema);

module.exports = Events;