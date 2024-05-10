import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div className='w-full h-screen bg-slate-700 flex flex-col md:flex-row-reverse'>
      {/* Right Panel */}
      <div className='w-full md:w-1/2 md:h-full h-[55%] overflow-y-scroll border border-gray-400 p-4 mb-4 bg-slate-800'>
        {/* Placeholder content */}
        <h1 className='bg-slate-800 text-xl font-semibold text-center text-white p-2 rounded'>Your All Task Here</h1>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 1</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 2</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 3</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 4</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 5</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 6</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 7</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 8</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 9</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 10</div>
        <div className='w-full flex bg-slate-700 mt-4 p-2 rounded text-white'>Task 11</div>
      </div>
      {/* Left Panel */}
      <div className='w-full md:w-1/2 md:h-full h-auto flex flex-col p-5 relative '>
        {/* Badge Section */}
        <div className='bg-gray-500 w-full shadow-lg rounded-t flex justify-center md:justify-start items-center p-2 md:p-12'>
          <div className='border-2 border-yellow-500  md:w-1/2 md:h-40 rounded-full flex flex-col justify-center items-center p-7 md:p-5'>
            <div className='flex gap-3'><h1 className='text-white'>4</h1> <div className='border h-6 w-0 border-yellow-400 rotate-[30deg]'></div> <h2 className='text-white'>5</h2></div>
            <div className='border  w-full m-5  border-yellow-400'></div>
            <div className='w-24 h-8 bg-gray-800 flex items-center justify-center text-white rounded border-2 border-green-500'>Great 🎉</div>
          </div>
          <div className='border h-full w-0 ml-16 border-yellow-400 hidden md:flex'></div>
          <div className='w-full h-full ml-7 flex items-center hidden md:flex'>
            <div className='w-full h-full ml-7 flex items-center'>
              <ul className='text-gray-300'>
                <li> <span className='text-yellow-400 text-xl font-semibold'>Earn badges</span> based on task completion.</li>
                <li><span className='text-red-500  font-semibold'>Bad :</span> Less than 50% tasks finished</li>
                <li> <span className='text-blue-800 font-semibold'>Normal :</span> 50% - 80% tasks finished</li>
                <li><span className='text-green-500 font-semibold'>Great :</span> More than 80% tasks finished</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Task Completion Level Section */}
        <div className='w-full h-24 rounded-b bg-gray-500'>
          <hr />
          <h1 className='flex justify-center font-semibold text-gray-100 pt-2 pb-2'>Track Your Progress: Daily Task Completion Level</h1>
          <div className='flex justify-center pb-5'>
            <div className='w-20 h-8 bg-gray-800  flex items-center justify-center text-white m-2 rounded border-2 border-red-500'>Bad 😟</div>
            <div className='w-24 h-8 bg-gray-800 flex items-center justify-center text-white m-2 rounded border-2 border-blue-500'>Normal 😇 </div>
            <div className='w-24 h-8 bg-gray-800 flex items-center justify-center text-white m-2 rounded border-2 border-green-500'>🎉 Great</div>
          </div>
        </div>
        {/* Add Task Form */}
        <div className='md:absolute mt-10 md:mt-0 bottom-5 md:w-[93%] rounded bg-gray-500 flex items-center border-2'>
          <form method="post" className='w-[90%] overflow-hidden rounded-l'>
            <input type="text" placeholder='Add new task' className='w-full bg-gray-800 bg h-full p-2 text-white' />
          </form>
          <FontAwesomeIcon icon={faPlus} className='text-white px-8 cursor-pointer' />
        </div>
      </div>
    </div>


  )

}


