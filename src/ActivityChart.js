import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './Dashboard.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklySalesChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
        datasets: [
            {
                label: 'Products Sold',
                data: [120, 150, 100, 180, 160, 200, 170], // Sample data for products sold
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Custom color for bars
                borderColor: 'rgba(54, 162, 235, 1)', // Border color for bars
                borderWidth: 1,
            },
        ]
    };

    const options = {
        responsive: true,
        innerHeight: 300,
        plugins: {
            legend: {
                position: 'top', // Legend position
            },
            tooltip: {
                callbacks: {
                    label: (context) => `Sold: ${context.raw}`, // Custom tooltip format
                },
            },
            title: {
                display: true,
                text: 'Activity ', // Chart title
            },
        },
        scales: {

            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Products Sold', // y-axis title
                },

            },
        },
    };

    return (
        <div >
            <Bar data={data} options={options} className='bar-container' />
        </div>
    );
};

export default WeeklySalesChart;
