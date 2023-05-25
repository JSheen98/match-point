const { Schema, model } = require('mongoose');

// Team model
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
        // Puts the creator of the team's username here
        teamCreator: {
            type: String,
            required: true,
            trim: true
        }
    }
);

const Team = model('Team', teamSchema);

module.exports = Team