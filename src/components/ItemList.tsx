// components/ItemList.tsx
import React from "react";
import { Task } from "../App";
import ItemCard from "./ItemCard";

interface ItemListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ItemList: React.FC<ItemListProps> = ({ tasks, setTasks }) => {
  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ width: "70%" }}>
      <h3>Task List</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ItemCard key={task.id} task={task} onRemove={handleRemoveTask} />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default ItemList;