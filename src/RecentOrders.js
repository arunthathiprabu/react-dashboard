import React from 'react';
import './RecentOrders.css'

const orders = [
    {
        customer: 'Wade Warren',
        orderNo: '15478256',
        amount: '$124.00',
        status: 'Delivered',
        image: 'https://i.imgur.com/yXOvdOSs.jpg', 
    },
    {
        customer: 'Jane Cooper',
        orderNo: '48965786',
        amount: '$365.02',
        status: 'Delivered',
        image: 'https://i.imgur.com/7vQD0fPs.jpg', 
    },
    {
        customer: 'Guy Hawkins',
        orderNo: '78958215',
        amount: '$45.88',
        status: 'Cancelled',
        image: "https://i.imgur.com/MK3eW3As.jpg", 
    },
    {
        customer: 'Kristin Watson',
        orderNo: '20965732',
        amount: '$65.00',
        status: 'Pending',
        image: 'https://i.imgur.com/QIrZWGIs.jpg', 
    },
    {
        customer: 'Cody Fisher',
        orderNo: '95715620',
        amount: '$545.00',
        status: 'Delivered',
        image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg', 
    },
    {
        customer: 'Savannah Nguyen',
        orderNo: '78514568',
        amount: '$128.20',
        status: 'Delivered',
        image: 'https://picsum.photos/800/600.jpg', 
    },
];

const getStatusStyle = (status) => {
    switch (status) {
        case 'Delivered':
            return { color: 'green' };
        case 'Cancelled':
            return { color: 'red' };
        case 'Pending':
            return { color: 'orange' };
        default:
            return {};
    }
};

const RecentOrders = () => {
    return (
        <div className='recent-orders-container '>
            <h2>Recent Orders</h2>
            <table className='table-heading '>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid #444', padding: '10px', textAlign: 'left' }}>Customer</th>
                        <th style={{ borderBottom: '1px solid #444', padding: '10px', textAlign: 'left' }}>Order No.</th>
                        <th style={{ borderBottom: '1px solid #444', padding: '10px', textAlign: 'left' }}>Amount</th>
                        <th style={{ borderBottom: '1px solid #444', padding: '10px', textAlign: 'left' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td className='order'>
                                <img
                                    src={order.image}
                                    alt={order.customer}
                                    className='img'
                                />
                                {order.customer}
                            </td>
                            <td className='order-container'>{order.orderNo}</td>
                            <td className='order-container'>{order.amount}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #444', ...getStatusStyle(order.status) }}>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >

    );
};

export default RecentOrders;
