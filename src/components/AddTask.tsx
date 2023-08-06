import React, { useState } from 'react'
import styles from './AddTask.module.css'
import plus from '../assets/plus.svg'
import logo from '../assets/logo.svg'

interface AddTaskProps {
	onTaskCreate: (newTask: string) => void
}

export function AddTask(props: AddTaskProps) {
	const [newTaskInput, setNewTaskInput] = useState<string>('')

	function handleCreateNewTask() {
		if (newTaskInput.trim() === '') {
      alert('Escreva a descrição da tarefa')
			return // Não cria uma nova tarefa se o input estiver vazio
		}
		else{
			props.onTaskCreate(newTaskInput);
		}
		
		setNewTaskInput('')
	}

	function handleOnChangeTask(event: React.ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('')
		setNewTaskInput(event.target.value)
	}
	return (
		<>
			<header className={styles.header}>
				<img src={logo} alt="Logo da aplicação" />
			</header>
			<div className={styles.addTaskContainer}>
				<input type="text" value={newTaskInput} onChange={handleOnChangeTask} />
				<button
					className={styles.addTask}
					type="button"
					onClick={handleCreateNewTask}
				>
					Criar
					<img src={plus} alt="Criar" />
				</button>
			</div>
		</>
	)
}
