import React from 'react';
import { Line } from 'react-chartjs-2';

const ActivityChart = ({ data }) => {
    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Calories Burned',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return <Line data={chartData} />;
};

export default ActivityChart;