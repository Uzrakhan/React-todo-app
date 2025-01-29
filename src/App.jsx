import { useState } from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid Icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand Icons

library.add(fas, fab); // Add the icons you want to use

function TodoApp() {
  const [todos,setTodos] = useState([]);
  const [inputValue,setInputValue] = useState('');

  const addTodo = () => {
    const trimmedValue = inputValue.trim();
    if(!trimmedValue) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false
    };

    setTodos(prevTodos => [...prevTodos,newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo,completed: !todo.completed}: todo))
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' 
       placeholder='Enter tasks' 
       value={inputValue} 
       onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
             type='checkbox'
             checked={todo.completed}
             onChange={() => toggleTodo(todo.id)}
             />
             <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}} >
              {todo.text}
             </span>
             <button onClick={() => deleteTodo(todo.id)} style={{backgroundColor: 'red', color: 'white'}} className='deleteBtn'>
             <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp;
