import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='grid grid-cols-2 gap-12'>
    <div>
      <h2 className='text-2xl font-bold'>Barbie</h2>
    </div>
    <div>
      <h2 className='text-2xl font-bold'>Aldo</h2>
    </div>
  </div>
  )
}

export default App
