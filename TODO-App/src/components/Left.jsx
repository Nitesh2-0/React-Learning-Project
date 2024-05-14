import React from 'react'
import AddToTask from './components1/AddToTask';
import ShowHead from './components1/ShowHead';
import ProgressMap from './components1/ProgressMap';


const Left = ({ tasks, title, setTitle, setTasks }) => {

  return (
    <div className='w-[100%] md:h-full h-auto flex flex-col p-5 relative bg-stone-800 md:bg-stone-900'>
      <ShowHead tasks={tasks} setTitle={setTitle} title={title} />
      <ProgressMap />
      <AddToTask title={title} tasks={tasks} setTitle={setTitle} setTasks={setTasks} />
    </div>
  )
}

export default Left
