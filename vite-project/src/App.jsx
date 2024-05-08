import React, { useRef } from 'react'

export default function App() {
  const focusInput = useRef(null)
  setTimeout(() => {
    focusInput.current.style.border = "2px solid green"; 
    console.log(focusInput.current);
  });
  return (
    <div className="bg-indigo-500 text-white p-5">
      <h1 >Hello World</h1>
      <input ref={focusInput} type="text" />
    </div>
  )
}

// Useref -> react ka queryselector hai 
