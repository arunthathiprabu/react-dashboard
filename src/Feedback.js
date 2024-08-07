import React from 'react';


const feedbackData = [
    {
        name: 'Jenny Wilson',
        rating: 4,
        message: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
        image: 'https://i.imgur.com/QIrZWGIs.jpg',
    },
    {
        name: 'Dianne Russell',
        rating: 5,
        message: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
        image: 'https://i.imgur.com/yXOvdOSs.jpg',
    },
    {
        name: 'Devon Lane',
        rating: 4,
        message: "Normally wings are wings, but theirs are lean, meaty, and tender.",
        image: 'https://i.imgur.com/MK3eW3As.jpg',
    },
];

const Feedback = () => {
    return (<div style={styles.container}>
        <h2>Customer's Feedback</h2>
        {feedbackData.map((feedback, index) => (
            <div key={index} style={styles.feedbackItem}>
                <img src={feedback.image} alt={feedback.name} style={styles.image} />
                <div style={styles.feedbackContent}>
                    <h3>{feedback.name}</h3>
                    <div style={styles.stars}>{'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}</div>
                    <p>{feedback.message}</p>
                </div>
            </div>
        ))}
    </div>
    );
};

const styles = {
    container: {
        backgroundColor: 'rgb(46 41 41)',
        padding: '20px',
        maxHeight: '400px',
        overflow: 'auto',
    },
    feedbackItem: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '20px',
        borderBottom: "1px solid #444"
    },
    image: {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        marginRight: '15px',
    },
    feedbackContent: {
        flex: 1,
    },
    stars: {
        color: '#FFD700',
    },
};

export default Feedback;
