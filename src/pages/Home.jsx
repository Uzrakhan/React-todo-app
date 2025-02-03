// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Destructure the props to get todos, toggleTodo, and deleteTodo
  return (
    <div className="text-center">
      <img 
       src='https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9kbyUyMGpvdXJuYWx8ZW58MHx8MHx8fDA%3D'
       className='rounded border border-dark w-100'
       />
      <h1>Welcome to the Todo App!</h1>
      <p>This app helps you manage your daily tasks. Click the button below to start using your Todo List.</p>
      <Link to="/todos" className="btn btn-primary">Go to Todo List</Link>
    </div>
  );
};

export default Home;
