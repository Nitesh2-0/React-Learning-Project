import {useState} from 'react'

export default function App() {
  const [initialTimeAndDate, setTimeAndDate] = useState(new Date().toLocaleString())
  function updateTimeAndDate(){
    setTimeAndDate(new Date().toLocaleString())
  }
  setInterval(()=>{
    setTimeAndDate(new Date())
  },1000)
  return (
    <div>
      <h1>{initialTimeAndDate.toLocaleString()}</h1>
    </div>
  )
}

