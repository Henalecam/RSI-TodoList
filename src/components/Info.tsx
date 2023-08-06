import { useState } from 'react';
import styles from './Info.module.css';
import { AddTask } from './AddTask';
import { Tasks } from './Tasks';
import { EmptyTask } from './EmptyTask';

interface InfoProps {
  createdTasks?: number;
}

export function Info(props: InfoProps) {
  const [tasks, setTasks] = useState<string[]>([]);
  const [createdTasks, setCreatedTasks] = useState<number>(props.createdTasks ?? 0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleTaskCreate(newTask: string) {
    if (!tasks.includes(newTask)) {
      setTasks([...tasks, newTask]);
      setCreatedTasks(createdTasks + 1); // Incrementa o contador de tarefas criadas
    }
  }

  function handleTaskDelete(task: string) {
    // Verifica se a tarefa está na lista antes de removê-la
    if (tasks.includes(task)) {
      setTasks(tasks.filter((t) => t !== task));
      setCreatedTasks(createdTasks - 1); // Decrementa o contador de tarefas criadas
      setCompletedTasks(completedTasks.filter((t) => t !== task)); // Remove a tarefa da lista de tarefas concluídas
    }
  }

  function handleTaskStatusChange(taskId: string) {
    // Verifica se a tarefa está na lista antes de atualizar o status
    if (tasks.includes(taskId)) {
      if (completedTasks.includes(taskId)) {
        // Se a tarefa já estava concluída, remove da lista de tarefas concluídas
        setCompletedTasks(completedTasks.filter((t) => t !== taskId));
      } else {
        // Se a tarefa não estava concluída, adiciona na lista de tarefas concluídas
        setCompletedTasks([...completedTasks, taskId]);
      }
    }
  }

  return (
    <>
      <AddTask onTaskCreate={handleTaskCreate} />
      <div className={styles.tasks}>
        <div className={styles.info}>
          <p className={styles.created}>
            Tarefas Criadas <span>{createdTasks}</span>
          </p>
          {completedTasks.length > 0 ? (
            <p className={styles.done}>
              Concluídas <span>{`${completedTasks.length} de ${createdTasks}`}</span>
            </p>
          ) : (
            <p className={styles.done}>
              Concluídas <span>{completedTasks.length}</span>
            </p>
          )}
        </div>
        <div className={styles.content}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Tasks
                key={task}
                id={task}
                newTaskInput={task}
                onDeleteTask={handleTaskDelete}
                onTaskStatusChange={() => handleTaskStatusChange(task)}
              />
            ))
          ) : (
            <EmptyTask />
          )}
        </div>
      </div>
    </>
  );
}
