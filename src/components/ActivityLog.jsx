import React, { useState } from 'react';

const ActivityLog = () => {
    const [activity, setActivity] = useState({ type: '', duration: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Activity logged:', activity);
        // Send activity data to backend (e.g., using Axios or Fetch)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Activity Type:
                <select onChange={(e) => setActivity({ ...activity, type: e.target.value })}>
                    <option value="run">Running</option>
                    <option value="swim">Swimming</option>
                    <option value="cycle">Cycling</option>
                </select>
            </label>
            <label>
                Duration (minutes):
                <input
                    type="number"
                    onChange={(e) => setActivity({ ...activity, duration: e.target.value })}
                />
            </label>
            <button type="submit">Log Activity</button>
        </form>
    );
};

export default ActivityLog;