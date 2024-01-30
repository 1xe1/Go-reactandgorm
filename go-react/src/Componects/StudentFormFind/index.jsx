import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import Student from "../Student";

const StudentFormFind = () => {
  const [inputId, setInputId] = useState("");
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    console.log("Updated studentId=" + studentId);
  }, [studentId]); // This effect will run whenever studentId changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // print inputId to console
    console.log("inputId=" + inputId);
    setStudentId(Number(inputId)); // Convert inputId to a number
    console.log("studentId=" + studentId);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center"
      >
        <label>
          Enter Student ID :
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
      {/* Render the Item component if StudentId is not null */}
      <div className="w-full h-auto justify-center text-center">
        <div>{studentId !== null && <Student id={studentId} />}</div>
      </div>
    </div>
  );
};

export default StudentFormFind;
