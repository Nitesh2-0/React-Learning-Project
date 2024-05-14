import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

const Right = ({ tasks, setTasks, setTitl }) => {

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
  return (
    <div className='w-full h-[55%] md:h-full  overflow-y-scroll border border-gray-400 p-4 mb-4 bg-stone-900'>
      <h1 className='text-xl font-semibold text-center text-white p-2 rounded '>Your All Task Here</h1>
      {tasks.length === 0 ? (
        <div className='text-yellow-500 text-xl text-center'>No Pending Work Available</div>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="w-full flex bg-stone-700 mt-4 rounded text-white justify-between items-center py-2 px-4">
            <div className={`flex items-center ${task.completed ? 'line-through' : ''}`}>
              <div
                className="h-6 w-6 border overflow-hidden border-yellow-500 rounded-full flex items-center justify-center mr-3 cursor-pointer"
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
                onClick={() => EditHandler(task.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Right
