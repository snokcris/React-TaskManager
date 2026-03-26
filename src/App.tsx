import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import Summary from "./components/Summary";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/Todo";
import "./App.css";

type FilterType = "all" | "pending" | "completed";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos) as Todo[];
    }

    return [
      { id: 1, text: "Learn React basics", completed: false },
      { id: 2, text: "Build a Task Manager", completed: true },
    ];
  });

  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "pending") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

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
        <FilterBar currentFilter={filter} onChangeFilter={setFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;