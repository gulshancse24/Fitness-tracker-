const express = require('express');
const router = express.Router();

const activities = [];

router.post('/log', (req, res) => {
    const { userId, type, duration } = req.body;
    activities.push({ userId, type, duration });
    res.json({ message: 'Activity logged successfully' });
});

router.get('/recommend/:userId', (req, res) => {
    const userId = req.params.userId;
    // Dummy recommendation logic
    res.json({ recommendedWorkouts: ["Running", "Yoga"] });
});

module.exports = router;