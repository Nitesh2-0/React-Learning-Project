import React from 'react'
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddToTask = ({ title, setTitle, setTasks, tasks }) => {
  function submitHandler(event) {
    event.preventDefault()
    if (title === '') return;

    const newtodo = { id: nanoid(), title, completed: false }
    setTasks([...tasks, newtodo])
    setTitle('')
    localStorage.setItem('tasks', JSON.stringify([...tasks, newtodo]))
  }
  return (
    <div className='md:absolute mt-10 md:mt-0 bottom-5 md:w-[93%] rounded bg-green-700 flex items-center border-2'>
      <form onSubmit={submitHandler} className='w-full overflow-hidden rounded-l flex items-center'>
        <input onChange={(e) => setTitle(e.target.value)} value={title}
          type="text" placeholder='Add new task' className='w-full bg-gray-800 bg h-full p-2 text-white decoration-none' />
        <button ><FontAwesomeIcon icon={faPlus} className='text-white px-8 cursor-pointer ' /></button>
      </form>
    </div>
  )
}

export default AddToTask
