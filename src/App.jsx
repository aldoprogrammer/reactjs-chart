import { useState } from 'react'
import { Card, Metric, Text } from '@tremor/react';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='grid grid-cols-2 gap-12'>
    <div>
      <h2 className='text-2xl font-bold'>Barbie</h2>
      <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
      </Card>
    </div>
    <div>
      <h2 className='text-2xl font-bold'>Aldo</h2>
      <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
      </Card>
    </div>
  </div>
  )
}

export default App
