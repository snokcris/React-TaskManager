import { useState } from "react";
import type { Todo } from "./types/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Build a Task Manager", completed: true },
  ]);

  return (
    <div className="app">
      <div className="todo-card">
        <h1>Task Manager</h1>
        <p className="subtitle">Organize your day, one task at a time.</p>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} - {todo.completed ? "Done" : "Pending"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;