import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ItemList from "./components/ItemList";

export interface Task {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, title: "Task 2", description: "Description for Task 2" },
    { id: 3, title: "Task 3", description: "Description for Task 3" },
  ]);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Sidebar setTasks={setTasks} tasks={tasks} />
      <ItemList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
