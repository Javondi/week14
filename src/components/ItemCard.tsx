// components/ItemCard.tsx
import React from "react";
import { Task } from "../App";

interface ItemCardProps {
  task: Task;
  onRemove: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ task, onRemove }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={() => onRemove(task.id)}>Remove</button>
    </div>
  );
};

export default ItemCard;
