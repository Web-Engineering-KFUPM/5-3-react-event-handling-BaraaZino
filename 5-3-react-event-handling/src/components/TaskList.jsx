import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  if (!tasks.length){
    return "Empty list"
  }
  return (
    <ul>
      {tasks.map((t) => (
      <TaskItem key={t.id} text={t.text} id={t.id} onDelete={onDelete} />
      ))}
      </ul>
  );
}
