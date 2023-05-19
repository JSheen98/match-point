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
        events: [{
            type: Schema.Types.ObjectId,
            ref: 'Events',
        }]
    }
);

const Team = model('Team', teamSchema);

module.exports = Team