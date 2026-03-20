import { useState } from "react";

type TodoFormProps = {
  onAddTodo: (text: string) => void;
};

function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) return;

    onAddTodo(trimmedText);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;