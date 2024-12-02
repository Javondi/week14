// components/Sidebar.tsx
import React, { useState } from "react";
import { Task } from "../App";

interface SidebarProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      const newTask: Task = {
        id: tasks.length + 1,
        title,
        description,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div style={{ width: "30%" }}>
      <h3>Add a Task</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Sidebar;
