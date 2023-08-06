import styles from './EmptyTask.module.css';
import clipboard from '../assets/clipboard.svg';

export function EmptyTask(){
  return(
    <div className={styles.emptyTask}>
      <img src={clipboard} alt='Clipboard' />
      <p>
        Você ainda não tem tarefas cadastradas.
        <br />
        <span>
          Crie tarefas e organize seus itens a fazer.
        </span>
      </p>
    </div>
  );
}