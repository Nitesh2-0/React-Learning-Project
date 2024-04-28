import {useState} from 'react'

export default function App() {
  const [initialTimeAndDate, setTimeAndDate] = useState(new Date())
  function updateTimeAndDate(){
    setTimeAndDate(new Date())
  }
  setInterval(()=>{
    setTimeAndDate(new Date())
  },1000)
  return (
    <div>
      <h1>{initialTimeAndDate.toString()}</h1>
    </div>
  )
}

