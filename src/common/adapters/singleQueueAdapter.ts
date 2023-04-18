import Queue from "better-queue";
import { Subject, Observable } from "rxjs";

export class SingleQueueAdapter {
  public static instance: SingleQueueAdapter;
  private queue!: Queue;
  private concurrent: number = 1;
  private maxTimeout: number = 20000;
  // status queue
  private _statusFinishTasks = new Subject<boolean>();
  public statusFinishTasks: Observable<boolean>;
  // get result for queue
  private _resultWorker = new Subject<any>();
  public resultWorker: Observable<any>;

  public static getInstance(): SingleQueueAdapter {
    if (!SingleQueueAdapter.instance) {
      SingleQueueAdapter.instance = new SingleQueueAdapter();
    }
    return SingleQueueAdapter.instance;
  }

  private constructor() {
    this.statusFinishTasks = this._statusFinishTasks.asObservable();
    this.resultWorker = this._resultWorker.asObservable();
    this.createWorkQueue();
    this.listenFinishAllTask();
  }

  private createWorkQueue() {
    this.queue = new Queue(async (task:Promise<any>, callback) => {
      try {
        const result = await task;
        if (result instanceof Error) {
          callback(result, null);
        }
        callback(null, result);
      } catch (error) {
        callback(error, null);
      }
    }, {
      concurrent: this.concurrent,
      maxTimeout: this.maxTimeout,
    });
  }

  private listenFinishAllTask() {
    this.queue.on("drain", () => {
      this.setStatusFinishTasks(true);
    });
  }

  private setStatusFinishTasks(status: boolean) {
    this._statusFinishTasks.next(status);
  }

  private setResultWorker(result: any) {
    this._resultWorker.next(result);
  }

  private setErrorWorker(error: any) {
    this._resultWorker.error(error);
  }

  public execute(task:Promise<any>) {
    this.queue.push(task, (error: any, result: any) => {
      if (error) {
        this.setErrorWorker(error);
      } else {
        this.setResultWorker(result);
      }
    });
  }
}
