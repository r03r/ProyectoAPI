"use client";
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
    // console.log('Clicked Square');
  }
  return (
    <button
      onClick={handleClick}
      className="text-white space-y-4 content-center flex-row bg-green-400 hover:bg-sky-800 border-2 border-green-600 m-3 p-5 rounded-lg ">
        {value}
    </button>
  );
}
export default function Board() {
  return (
  <>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </>
  );
}
