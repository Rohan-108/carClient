"use client";

import { useState } from "react";
import View from "./_components/view";
import Latest from "./_components/latest";
import FormComponent from "./_components/form";
export default function Home() {
  const [current, setCurrent] = useState(1);
  const handleClick = (num: number) => {
    setCurrent(num);
  };
  return (
    <main className="min-h-full w-full ">
      <div className="flex flex-row gap-2 mt-5 items-centerj justify-center ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleClick(1)}
          style={{ opacity: current !== 1 ? 0.5 : 1 }}
        >
          View
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleClick(2)}
          style={{ opacity: current !== 2 ? 0.5 : 1 }}
        >
          Create
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => handleClick(3)}
          style={{ opacity: current !== 3 ? 0.5 : 1 }}
        >
          Latest
        </button>
      </div>
      {current === 1 ? <View /> : current == 2 ? <FormComponent /> : <Latest />}
    </main>
  );
}
