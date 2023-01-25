import React from 'react';

import styles from './app.module.css';
import { FileUpload } from './features/file-upload';

function App() {
  return (
    <div className={styles.container}>
      <FileUpload />
    </div>
  );
}

export default App;
