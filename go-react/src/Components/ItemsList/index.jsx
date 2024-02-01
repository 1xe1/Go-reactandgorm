import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ItemsList = () => {
  const [items, setItems] = useState([]);             // State to store the items
  const [isLoading, setIsLoading] = useState(true);   // State to handle loading status
  const [error, setError] = useState(null);           // State to handle any errors

  // Function to fetch items from the API
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/items");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data); // Update the state with the fetched items data into the items array
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=> {
    fetchItems();
  },[]);

  return (
    <>
      <div>
      <div>ItemsList</div>
      {isLoading && <p>Loading..</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {items.map(items=>(
           <li key={items.ID}>Name = {items.Name} Price = {items.Price}</li> // Assuming each item has an id and name
          ))}
      </ul>
      </div>
    </>
  );
};

export default ItemsList;
