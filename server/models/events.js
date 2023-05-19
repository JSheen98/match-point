const { Schema, model } = require('mongoose');

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
        location :{
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
        time: {
            type: String,
            required: true,
            unique: false

        }
        // team1: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Team'
        // },
        // team2: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Team'
        // },
// Save poster's information to event as contact info
        // username: {
        //     type: String,
        //     allowNull: false,
        // },
        // email: {
        //     type: String,
        //     allowNull: false,
        // },
        // phone: {
        //     type: String,
        //     allowNull: true,
        // }
    }
);

const Events = model('Events', eventSchema);

model.exports = Events;