import React from "react";
import TodoItem from '../components/TodoItem';


const CompletedTodos = ({todos, deleteTodo}) => {
    return(
    <div className="card shadow-lg p-4">
      <h1 className="text-center">Completed Todos</h1>
      <ul className="list-group">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
          ))
        ) : (
          <li className="list-group-item text-center">No completed tasks</li>
        )}
      </ul>
    </div>
    )
};

export default CompletedTodos;