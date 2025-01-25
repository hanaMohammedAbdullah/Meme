"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [state, setState] = useState(0);
  const increse = () => {
    setState(state++);
  };
  function decrease() {
    setState(state--);
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-32 font-[family-name:var(--font-geist-sans)]'>
      <div className='flex text-4xl'>
        <button onClick={() => increse()} className='m-4  p-5 bg-yellow-300'>
          +
        </button>

        <h1 className=' '>{state}</h1>
        <button onClick={decrease} className='m-4 p-5 bg-red-700'>
          -
        </button>
      </div>
    </div>
  );
}
