export class FileLoader {
  private readonly worker = new Worker(new URL('./files-worker.ts', import.meta.url));

  loadFile(file: File, onProgress: FileLoader.ProgressHandler): void {
    this.worker.postMessage(file);

    this.worker.addEventListener('message', (e) => onProgress(e.data));
  }

  dispose(): void {
    this.worker.terminate();
  }
}

export namespace FileLoader {
  export type ProgressHandler = (progress: number) => void;
}
