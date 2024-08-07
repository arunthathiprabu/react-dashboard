import React from 'react';
import './Dashboard.css'; 


const data = [
    {
        title: 'Total Orders',
        value: 75,
        trend: 3,
        trendDirection: 'up',
        icon: '📦',
    },
    {
        title: 'Total Delivered',
        value: 70,
        trend: -3,
        trendDirection: 'down',
        icon: '👜',
    },
    {
        title: 'Total Cancelled',
        value: 5,
        trend: 3,
        trendDirection: 'up',
        icon: '❌',
    },
    {
        title: 'Total Revenue',
        value: '$12k',
        trend: -3,
        trendDirection: 'down',
        icon: '💰',
    },
];

const Dashboard = () => {
    return (
        <div className="dashboard">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <div className='icon-container'>
                        <div className="icon">{item.icon}</div>
                        <div className="info">
                            <h3>{item.title}</h3>
                            <p>{item.value} <span className={item.trendDirection}>{item.trend > 0 ? `↑ ${item.trend}%` : `↓ ${Math.abs(item.trend)}%`}</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
