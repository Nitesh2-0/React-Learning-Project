import { useState } from 'react'
import { nanoid } from 'nanoid'


function App() {
  const [user, setUser] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = { name, email, phone, id: nanoid() }
    setUser([...user, newUser])
    console.log(newUser);

    setEmail('')
    setName('')
    setPhone('')

    localStorage.setItem('tasks', JSON.stringify([...user, newUser]))
  }

  function deleteHandler(id) {
    const updatedTasks = user.filter((user) => user.id !== id);
    setUser(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  }
  console.log(user);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='enter name' value={name} />
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter email' value={email} />
        <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder='enter phonenumber' value={phone} />
        <button type='submit'>submit</button>
      </form>

      <div >
        {user.length > 0 ? (
          user.map((user, index) => (
            <div key={index}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <button onClick={() => deleteHandler(user.id)}>Delete</button>
            </div>
          ))
        ) : (
          <h1>No Data Present</h1>
        )}
      </div>

    </>

  )
}

export default App
