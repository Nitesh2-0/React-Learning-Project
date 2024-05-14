import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Left from './components/Left';
import Right from './Right';


export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [title, setTitle] = useState('')

  console.log(tasks);

  return (
    <div className='w-full h-screen bg-stone-700 flex flex-col md:flex-row-reverse'>
      <Right tasks={tasks} setTasks={setTasks} setTitle={setTitle} />
      <Left faPlus={faPlus} tasks={tasks} title={title} setTasks={setTasks} setTitle={setTitle}/>
    </div>
  )
}
