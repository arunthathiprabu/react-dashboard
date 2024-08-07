import React from 'react';
import Stats from './Stats';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import './App.css';
import Menu from './Menu';
import NetProfitDashboard from './NetProfitDashboard';
import Navbar from './Navbar';
import SideNavBar from './SideNavBar';


const Dashboard = () => {
    return (
        <>
            <Navbar />
            <SideNavBar />
            <div className='page-container' >
                <h1>Dashboard</h1>
                <div className='dashboard-container'>
                    <Stats />
                    <NetProfitDashboard />
                    <ActivityChart />
                    <Menu />
                    <RecentOrders />
                    <Feedback />
                </div>
            </div>

        </>
    );
};

export default Dashboard;
