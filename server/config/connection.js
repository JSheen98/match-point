const mongoose = require('mongoose');

// mongoose connection url 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MatchPoint');

module.exports = mongoose.connection;