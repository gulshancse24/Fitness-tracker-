import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Welcome to Your Fitness Dashboard</h1>
            <div className="stats">
                <h3>Today's Summary</h3>
                <p>Steps: 5000</p>
                <p>Calories burned: 600</p>
            </div>
        </div>
    );
};

export default Dashboard;