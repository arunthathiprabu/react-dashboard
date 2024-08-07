// src/NetProfitDashboard.js

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import CSS

const NetProfitDashboard = () => {
    const netProfit = 6759.25;
    const goalCompletedPercentage = 70;
    const growthRate = 3;

    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <h2 style={styles.title}>Net Profit</h2>
                <h1 style={styles.profit}>${netProfit.toFixed(2)}</h1>
                <p style={styles.growth}>▲ {growthRate}%</p>
            </div>
            <div style={styles.circleContainer}>
                <CircularProgressbar
                    value={goalCompletedPercentage}
                    text={`${goalCompletedPercentage}%`}
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'round',
                        pathTransitionDuration: 0.5,
                        pathColor: '#3b5998',
                        textColor: '#fff',
                        trailColor: '#d6d6d6',
                    })}
                />
                <p style={styles.note}>*The values here have been rounded off.</p>
            </div>

        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(46, 41, 41)',
        color: '#fff',
        borderRadius: '10px',
        padding: '20px',
    },
    textContainer: {
        flex: 1,
        textAlign: 'left',
    },
    title: {
        margin: 0,
    },
    profit: {
        fontSize: '48px',
        margin: '10px 0',
    },
    growth: {
        margin: 0,
        color: 'green',
    },
    circleContainer: {
        width: '130px',
        height: '170px',
    },
    goalText: {
        textAlign: 'center',
        marginTop: '10px',
        color: '#fff',
    },
    note: {
        textAlign: 'center',
        fontSize: '12px',
        color: '#aaa',
    },
};

export default NetProfitDashboard;
