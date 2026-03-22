import TodoItem from "./TodoItem";
import type { Todo } from "../types/Todo";

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

function TodoList({ todos, onDeleteTodo, onToggleTodo }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="empty-message">No tasks found.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;