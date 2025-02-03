import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => {
            console.log("Deleting:", todo.id); // Check if this logs
            deleteTodo(todo.id);
          }}
          style={{ backgroundColor: 'red', color: 'white' }}
          className="btn btn-danger btn-sm"
        >
          <FontAwesomeIcon icon="fa-solid fa-trash-can" />
        </button>
      </li>  
    )
}   

export default TodoItem;