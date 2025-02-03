import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';  // Ensure this is pointing to the correct location
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid Icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand Icons

import NavBar from './components/NavBar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import CompletedTodos from './pages/CompletedTodos';



library.add(fas, fab); // Add the icons you want to use

function TodoApp() {
  const [todos,setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const trimmedValue = text.trim();
    if(!trimmedValue) return;

    const newTodo = {
      id: Date.now(),
      text: trimmedValue,
      completed: false
    };

    setTodos(prevTodos => [...prevTodos,newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo,completed: !todo.completed}: todo))
  };

  const deleteTodo = (id) => {
    console.log("Delete ID:", id); // Verify correct ID
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  return (
      <Router>
      {/* Navbar appears on every page */}
      <NavBar />
      <div className="container-fluid mt-3">
        {/* You can optionally include TodoForm here if you want it always visible, 
            or move it to a specific page */}
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/todos" 
            element={
              <TodoList
                todos={todos}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo} />
            } 
          />
          <Route 
            path="/completed" 
            element={<CompletedTodos todos={todos.filter(todo => todo.completed)} deleteTodo={deleteTodo}/>} 
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default TodoApp;
