import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Students = () => {
  //   const [items, setItems] = useState([]);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch items from the API
  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/students");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudents(data); // Update the state with the fetched items data into the items array
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <div>
        <div>Stduents</div>
        {isLoading && <p>Loading..</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {students.map((students) => (
            <li key={students.ID}>
              FirstName = {students.FirstName} LastName = {students.LastName} Age = {students.Age} Grade = {students.Grade}
            </li> // Assuming each item has an id and name
          ))}
        </ul>
      </div>
    </>
  );
};

export default Students;
