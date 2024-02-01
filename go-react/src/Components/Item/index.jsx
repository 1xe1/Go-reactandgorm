import React, { useState, useEffect } from 'react';

const Item = ({ id }) => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                // print id to console
                console.log("id from form =" +id);
                const response = await fetch(`http://localhost:5000/items/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // print data to console
                console.log("data = " + data);
                setItem(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItem();
    }, [id]); // Dependency array includes 'number' so effect runs when 'number' changes

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading item: {error}</p>;
    if (!item) return <p>No item found for ID {id}</p>;

    return (
        <div >
            <h2>Item Details</h2>
            <p><strong>ID:</strong> {item.ID}</p>
            <p><strong>Name:</strong> {item.Name}</p>
            {/* Render other item properties as needed */}
        </div>
    );
};

export default Item;
