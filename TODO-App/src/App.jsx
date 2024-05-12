import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPenToSquare, faL, faCheck } from '@fortawesome/free-solid-svg-icons';


export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [title, setTitle] = useState('')

  function submitHandler(event) {
    event.preventDefault()
    if (title === '') return;

    const date = new Date().toLocaleString()
    const newtodo = { id: nanoid(), title, completed: false, date }
    setTasks([...tasks, newtodo])
    setTitle('')
    localStorage.setItem('tasks', JSON.stringify([...tasks, newtodo]))
  }

  const CompleteHandler = (index) => {
    console.log(index);
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    setTasks(copyTasks);
    localStorage.setItem("tasks", JSON.stringify(copyTasks));
  };

  const DeleteHandler = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }


  console.log(tasks);

  return (
    <div className='w-full h-screen bg-stone-700 flex flex-col md:flex-row-reverse'>
      {/* Right Panel */}
      <div className='w-full md:w-1/2 md:h-full h-[55%] overflow-y-scroll border border-gray-400 p-4 mb-4 bg-stone-900'>
        {/* Placeholder content */}
        <h1 className='text-xl font-semibold text-center text-white p-2 rounded '>Your All Task Here</h1>
        {tasks.map((task, index) => (
          <div key={index} className="w-full flex bg-stone-700 mt-4 rounded text-white justify-between items-center py-2 px-4">
            <div className={`flex items-center ${task.completed ? 'line-through' : ''}`}>
              <div
                className="h-6 w-6 border overflow-hidden border-gray-500 rounded-full flex items-center justify-center mr-3 cursor-pointer"
                style={{ borderColor: task.completed ? 'transparent' : '' }}
                onClick={() => CompleteHandler(index)}
              >
                {task.completed && (
                  <div className="text-green-500 overflow-hidden bg-green-500 h-full w-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faCheck} className='overflow-hidden' />
                  </div>
                )}
              </div>
              <div className='flex flex-col'>
                <span className="">{task.title}</span>
                <span className="flex text-center justify-center">{task.date}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faTrash}
                className="text-red-500 cursor-pointer"
                onClick={() => DeleteHandler(task.id)}
              />
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="text-blue-500 cursor-pointer"
              />
            </div>
          </div>
        ))}

      </div>
      {/* Left Panel */}
      <div className='w-full md:w-1/2 md:h-full h-auto flex flex-col p-5 relative bg-stone-800 md:bg-stone-900'>
        {/* Badge Section */}
        <div className='bg-stone-900 w-full shadow-lg rounded-t-full md:rounded flex justify-center md:justify-start items-center p-3 md:p-16 '>
          <div className='border-2 border-yellow-500  md:w-1/2 md:h-40 rounded-full flex flex-col justify-center items-center p-7 md:p-5 bg-stone-800'>
            <div className='flex gap-3'><h1 className='text-white'>{tasks.filter((t) => t.completed == true).length}</h1> <div className='border h-6 w-0 border--400 rotate-[30deg]'></div> <h2 className='text-white'>{tasks.length}</h2></div>
            <div className='border  w-full m-5  border-yellow-400'></div>
            <div className='w-24 h-8 bg-gray-800 flex items-center justify-center text-white rounded border-2 border-green-500'>Great 🎉</div>
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
        {/* Task Completion Level Section */}
        <div className='w-full h-24 rounded-b bg-stone-800'>
          <hr />
          <h1 className='flex justify-center font-semibold text-gray-100 pt-2 pb-2'>Track Your Progress: Daily Task Completion Level</h1>
          <div className='flex justify-center pb-5'>
            <div className='w-20 h-8 bg-gray-800  flex items-center justify-center text-white m-2 rounded border-2 border-red-500'>Bad 😟</div>
            <div className='w-24 h-8 bg-gray-800 flex items-center justify-center text-white m-2 rounded border-2 border-blue-500'>Normal 😇 </div>
            <div className='w-24 h-8 bg-gray-800 flex items-center justify-center text-white m-2 rounded border-2 border-green-500'>🎉 Great</div>
          </div>
        </div>
        {/* Add Task Form */}
        <div className='md:absolute mt-10 md:mt-0 bottom-5 md:w-[93%] rounded bg-green-700 flex items-center border-2'>
          <form onSubmit={submitHandler} className='w-full overflow-hidden rounded-l flex items-center'>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Add new task' className='w-full bg-gray-800 bg h-full p-2 text-white decoration-none' />
            <button ><FontAwesomeIcon icon={faPlus} className='text-white px-8 cursor-pointer ' /></button>
          </form>
        </div>
      </div>
    </div>
  )
}
