const mongoose = require('mongoose');

// TODO: complete url??
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017');

module.exports = mongoose.connection;