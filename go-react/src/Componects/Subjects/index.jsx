import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Subjects = () => {
  //   const [items, setItems] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch items from the API
  const fetchSubjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/subjects");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubjects(data); // Update the state with the fetched items data into the items array
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <>
      <div>
        <div>subjects</div>
        {isLoading && <p>Loading..</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {subjects.map((subjects) => (
            <li key={subjects.ID}>
              Name = {subjects.Name} LastName = {subjects.Description}
            </li> // Assuming each item has an id and name
          ))}
        </ul>
      </div>
    </>
  );
};

export default Subjects;
