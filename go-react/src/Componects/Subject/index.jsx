import React, { useState, useEffect } from 'react';
import {
    Typography,
  } from "@material-tailwind/react";

const Subject = ({ id }) => {
    const [subject, setSubject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                // print id to console
                console.log("id from form =" +id);
                const response = await fetch(`http://localhost:5000/subjects/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // print data to console
                console.log("data = " + data);
                setSubject(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSubject();
    }, [id]); // Dependency array includes 'number' so effect runs when 'number' changes

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading subject: {error}</p>;
    if (!subject) return <p>No subject found for ID {id}</p>;

    return (
        <Typography>
            <h2>subject Details</h2>
            <p><strong>ID:</strong> {subject.ID}</p>
            <p><strong>Name:</strong> {subject.Name}</p>
            <p><strong>Description:</strong> {subject.Description}</p>
            {/* Render other subject properties as needed */}
        </Typography>
    );
};

export default Subject;
