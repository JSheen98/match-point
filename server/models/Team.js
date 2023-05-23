const { Schema, model } = require('mongoose');

const teamSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 15
        },
        sport: {
            type: String,
            required: true
        },
        description: {
            type: String,
            max: 280
        },
        teamCreator: {
            type: String,
            required: true,
            trim: true
        }
    }
);

const Team = model('Team', teamSchema);

module.exports = Team