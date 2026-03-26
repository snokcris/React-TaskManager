import { useState } from "react";
import Summary from "./components/Summary";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Build a Task Manager", completed: true },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const total = todos.length;
  const pending = todos.filter((todo) => !todo.completed).length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <div className="app">
      <div className="todo-card">
        <h1>Task Manager</h1>
        <p className="subtitle">Organize your day, one task at a time.</p>

        <TodoForm onAddTodo={addTodo} />
        <Summary total={total} pending={pending} completed={completed} />

        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;