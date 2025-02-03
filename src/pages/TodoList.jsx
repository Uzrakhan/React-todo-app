import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({todos,addTodo, toggleTodo, deleteTodo}) => {
    return(
        <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4 flex jsutify-content-center align-items-center">Your Todo List</h2>
        {/* Render the form to add a new todo */}
        <TodoForm addTodo={addTodo} />
        
        {/* Render the list of todos */}
        <ul className="list-group">
          {todos.length > 0 ? (
            todos.map(todo => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
              />
            ))
          ) : (
            <li className="list-group-item text-center">No todos available.</li>
          )}
        </ul>
      </div>  
    )
}

export default TodoList;