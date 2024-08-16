"use client";

import {
  myHeavyTaskInMainThread,
  myHeavyTaskInWorkerThread,
  myLightTaskInMainThread,
} from "@/actions";

const Buttons = () => (
  <div className="flex gap-3">
    <button
      className="bg-gray-700 p-3 text-white rounded-lg hover:bg-black hover:border-white border"
      onClick={() => myHeavyTaskInWorkerThread()}>
      Call Heavy Task In Worker Thread
    </button>

    <button
      className="bg-gray-700 p-3 text-white rounded-lg hover:bg-black hover:border-white border"
      onClick={() => myHeavyTaskInMainThread()}>
      Call Heavy Task In Main Thread
    </button>

    <button
      className="bg-gray-700 p-3 text-white rounded-lg hover:bg-black hover:border-white border"
      onClick={() => myLightTaskInMainThread()}>
      Call Light Task In Main Thread
    </button>
  </div>
);

export default Buttons;
