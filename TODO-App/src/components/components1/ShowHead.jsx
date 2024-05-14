import React from 'react'

const ShowHead = ({ tasks }) => {
  const tracingRating = () => {
    let totalTask = tasks.length;
    let completedTask = tasks.filter((elm) => elm.completed === true);

    let completedTaskPercentage = (completedTask.length / totalTask) * 100;

    if (completedTaskPercentage < 50) {
      return (
        <div className="w-24 h-8 bg-red-700 flex items-center justify-center text-white rounded border-2 border-red-500 ">
          Bad 😥
        </div>
      );
    } else if (completedTaskPercentage >= 50 && completedTaskPercentage < 75) {
      return (
        <div className="w-24 h-8 bg-indigo-800 flex items-center justify-center text-white rounded border-2 border-indigo-500">
          Good 😊
        </div>
      );
    } else {
      return (
        <div className="w-28 h-8 bg-green-500 flex items-center justify-center text-white rounded border-2 border-green-700">
          Excellent! 😀
        </div>
      );
    }
  };
  return (
    <div className='bg-stone-900 w-full shadow-lg rounded-t-full md:rounded flex justify-center md:justify-start items-center p-3 md:p-16 '>
      <div className='border-2 border-yellow-500  md:w-1/2 md:h-40 rounded-full flex flex-col justify-center items-center p-7 md:p-5 bg-stone-800'>
        <div className='flex gap-3'><h1 className='text-white'>{tasks.filter((t) => t.completed == true).length}</h1> <div className='border h-6 w-0 border--400 rotate-[30deg]'></div> <h2 className='text-white'>{tasks.length}</h2></div>
        <div className='border  w-full m-5  border-yellow-400'></div>
        {tracingRating()}
      </div>
      <div className='border h-full w-0 ml-12 border-yellow-400 hidden md:flex'></div>
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
  )
}

export default ShowHead
