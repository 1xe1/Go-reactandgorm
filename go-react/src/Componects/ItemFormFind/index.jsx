import React, { useState, useEffect } from "react";
import Item from "../Item"; // Ensure this path is correct
import { Button } from "@material-tailwind/react";

const ItemFormFind = () => {
  const [inputId, setInputId] = useState("");
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    console.log("Updated itemId=" + itemId);
  }, [itemId]); // This effect will run whenever itemId changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // print inputId to console
    console.log("inputId=" + inputId);
    setItemId(Number(inputId)); // Convert inputId to a number
    console.log("itemId=" + itemId);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center"
      >
        <label>
          Enter Item ID :
          <input
            className="border boder-black ml-1 mr-3"
            type="number"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            required
          />
        </label>
        <Button
          variant="outlined"
          type="submit"
          className="flex items-center gap-3"
        >
          Refresh
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </Button>
      </form>
      {/* Render the Item component if itemId is not null */}
      <div className="w-full h-auto justify-center text-center">
        <div>{itemId !== null && <Item id={itemId} />}</div>
      </div>
    </div>
  );
};

export default ItemFormFind;
