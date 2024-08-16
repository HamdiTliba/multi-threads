import heavyTaskWorkerApi from "./action/heavyTaskWorker";

export async function myHeavyTaskInMainThread() {
  console.log("Called myHeavyTaskInMainThread");
  let sum = 0;
  for (let i = 1; i <= 10000000000; i++) {
    sum += i;
  }
  console.log("Result from myHeavyTaskInMainThread:", sum, "\n");
  return sum;
}
export async function myLightTaskInMainThread() {
  console.log("Called myLightTaskInMainThread");
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.info("Result from myLightTaskInMainThread:", sum, "\n");
  return sum;
}
export async function myHeavyTaskInWorkerThread() {
  const result = await heavyTaskWorkerApi();

  console.log("Result from myHeavyTaskInWorkerThread:", result);
  return result;
}
