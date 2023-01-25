/* eslint-disable no-restricted-globals */

async function sendFile(file: File): Promise<boolean> {
  const formData = new FormData();
  formData.append('file', file);

  const xhr = new XMLHttpRequest();
  let progressState: number;

  return new Promise<boolean>((resolve) => {
    xhr.upload.addEventListener('progress', (event) => {
      const progress = Math.floor((event.loaded / event.total) * 100);

      if (progress !== progressState) {
        postMessage(progress);
        progressState = progress;
      }
    });

    xhr.addEventListener('loadend', () => {
      resolve(xhr.readyState === 4 && xhr.status === 201);
    });

    xhr.open('POST', 'http://localhost:3001/files/upload');
    xhr.send(formData);
  });
}

function onMessage(event: MessageEvent): void {
  if (event.data instanceof File) {
    sendFile(event.data);
  }
}

function init() {
  if (!self) {
    throw new Error();
  }

  self.addEventListener('message', onMessage);
}

init();

export {};
