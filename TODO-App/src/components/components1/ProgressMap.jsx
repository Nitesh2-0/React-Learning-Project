import React from 'react'

const ProgressMap = () => {
  return (
    <div className='w-full h-24 rounded-b bg-stone-800'>
      <hr />
      <h1 className='flex justify-center font-semibold text-gray-100 pt-2 pb-2'>Track Your Progress: Daily Task Completion Level</h1>
      <div className='flex justify-center pb-5'>
        <div className='w-20 h-8 bg-gray-800  flex items-center justify-center text-white m-2 rounded border-2 border-red-500'>Bad 😟</div>
        <div className='w-24 h-8 bg-gray-800 flex items-center justify-center text-white m-2 rounded border-2 border-blue-500'>Good 😊 </div>
        <div className='w-28 h-8 bg-gray-800 flex items-center justify-center text-white m-2 rounded border-2 border-green-500'>Excellent! 😀</div>
      </div>
    </div>
  )
}

export default ProgressMap
