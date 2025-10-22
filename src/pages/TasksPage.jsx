import { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TasksPage() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : filter === "Active"
      ? tasks.filter(t => !t.completed)
      : tasks.filter(t => t.completed);

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new task"
          className="border p-2 rounded w-full"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["All", "Active", "Completed"].map(f => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <ul>
        {filteredTasks.map(t => (
          <li
            key={t.id}
            className="flex justify-between items-center mb-2 border-b pb-1"
          >
            <span
              onClick={() => toggleTask(t.id)}
              className={`cursor-pointer ${
                t.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {t.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(t.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
