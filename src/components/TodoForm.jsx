import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue); // Pass trimmed input to addTodo
      setInputValue(""); // Clear the input field
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-3 todo-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
