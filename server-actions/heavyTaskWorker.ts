"use server";

import { Worker, isMainThread, workerData, parentPort } from "worker_threads";
import path from "path";

export default async function heavyTaskWorkerApi() {
  if (isMainThread) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.resolve("./server-actions/worker.ts"), {
        workerData: {
          task: "performSum",
          targetValue: 10000000000,
        },
      });

      worker.on("message", (result) => {
        resolve(result);
      });

      worker.on("error", reject);

      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  }
}
