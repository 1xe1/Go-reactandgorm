import React, { useState, useEffect } from 'react';

const Student = ({ id }) => {
    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudent= async () => {
            try {
                // print id to console
                console.log("id from form =" +id);
                const response = await fetch(`http://localhost:5000/students/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // print data to console
                console.log("data = " + data);
                setStudent(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStudent();
    }, [id]); // Dependency array includes 'number' so effect runs when 'number' changes

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading Student: {error}</p>;
    if (!student) return <p>No Student found for ID {id}</p>;

    return (
        <div >
            <h2>Student Details</h2>
            <p><strong>ID:</strong> {student.ID}</p>
            <p><strong>FirstName: </strong> {student.FirstName}</p>
            <p><strong>LastName: </strong> {student.LastName}</p>
            <p><strong>Age: </strong> {student.Age}</p>
            <p><strong>Grade: </strong> {student.Grade}</p>
            {/* Render other Student properties as needed */}
        </div>
    );
};

export default Student;
