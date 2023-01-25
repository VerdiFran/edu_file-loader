import clsx from 'clsx';
import React from 'react';

import styles from './progress.module.scss';

interface Props {
  progress: number;
  fileName?: string;
}

export const Progress = ({ progress, fileName }: Props) => {
  const isFullProgress = progress === 100;

  return (
    <div className={styles.container}>
      <p className={styles.fileName}>{fileName}</p>

      <div className={styles.progressBar}>
        <div
          className={clsx(styles.progress, isFullProgress && styles.progressSuccess)}
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className={styles.progressPercentage}>{progress}%</p>
    </div>
  );
};
