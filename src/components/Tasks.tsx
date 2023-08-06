import { useState } from 'react';
import styles from './Tasks.module.css';
import circle from '../assets/circle.svg';
import circle_done from '../assets/circle-done.svg';
import thrash from "../assets/Thrash.svg";

interface TaskProps {
  id: string;
  newTaskInput: string;
  onDeleteTask: (id: string) => void;
  onTaskStatusChange: (id: string) => void;
}

export function Tasks({ id, newTaskInput, onDeleteTask, onTaskStatusChange }: TaskProps) {
  const [isDone, setIsDone] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleTaskStatus() {
    setIsDone(!isDone);
    onTaskStatusChange(id);
  }

  return (
    <div className={styles.task}>
      <button className={styles.circle} onClick={handleTaskStatus}>
        <img src={isDone ? circle_done : circle} alt={isDone ? "Done" : "Not Done"} />
      </button>
      <div className={styles.content}>
        <p>{newTaskInput}</p>
      </div>
      <button className={styles.delete} onClick={handleDeleteTask}>
        <img src={thrash} alt="Delete" />      
      </button>
    </div>
  )
}
