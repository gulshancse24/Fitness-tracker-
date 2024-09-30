// Activity model can be implemented using a database like MongoDB
// Placeholder for activity schema
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;