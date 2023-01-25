import React, { ChangeEventHandler, useState } from 'react';

import { Progress } from '../../shared/components/progress';
import { FileLoader } from '../../shared/utils/file-loader/file-loader';

import styles from './file-upload.module.scss';

export const FileUpload = () => {
  const [fileLoader] = useState(() => new FileLoader());
  const [progress, setProgress] = useState<number>();
  const [fileName, setFileName] = useState<string>();

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.item(0);

    if (file) {
      setFileName(file.name);
      fileLoader.loadFile(file, setProgress);
    }
  };

  return (
    <form className={styles.container}>
      <label htmlFor="file" className={styles.uploadButton}>
        Choose file
      </label>
      <input type="file" id="file" className={styles.fileInput} onChange={onFileChange} />

      {!!progress && <Progress progress={progress} fileName={fileName} />}
    </form>
  );
};
