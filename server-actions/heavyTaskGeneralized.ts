"use server";

import path from "path";
import { Worker, isMainThread } from "worker_threads";

export default async function heavyTaskGeneralized(pathFile: any) {
  if (isMainThread) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.resolve(pathFile));

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
