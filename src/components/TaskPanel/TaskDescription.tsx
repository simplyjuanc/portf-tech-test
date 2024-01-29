import React from 'react';
import { TaskArticleProps } from './TaskPanel';
import styles from './TaskPanel.module.css';

export const TaskDescription: React.FC<TaskArticleProps> = (props) => {
  return (
    <article className={`${styles.panelArticle} ${styles.description}`}>
      <h3>Description</h3>
      <textarea
        name='description'
        id='description'
        placeholder={props.task.description}
        className={styles.description}
        wrap='hard'
        rows={5}
        cols={60}
      />
    </article>
  );
};
