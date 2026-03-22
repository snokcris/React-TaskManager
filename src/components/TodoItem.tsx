import type { Todo } from "../types/Todo";

type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

function TodoItem({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
      </div>

      <button className="delete-btn" onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;