const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const activityRoutes = require('./routes/activity');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/fitness_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));