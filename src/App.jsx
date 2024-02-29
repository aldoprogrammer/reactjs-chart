import { useState } from 'react'
import { Card, Metric, Text } from '@tremor/react';
import barbieData from './movie-barbie.json'
import aldoData from './movie-aldo.json'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  function addCommasToNumber(number) {
    // Convert the number to a string
    let numberString = number.toString();
    
    // Use regular expression to add commas every three digits from the end
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Return the modified string
    return numberString;
  }
  
  return (
  <div className='grid grid-cols-2 gap-12'>
    <div>
      <h2 className='text-2xl font-bold'>Barbie</h2>
      <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default
       text-tremor-content 
       dark:text-dark-tremor-content">Sales</p>
      <p className="text-3xl text-tremor-content-strong 
      dark:text-dark-tremor-content-strong 
      font-semibold">
          $ {addCommasToNumber(barbieData.global_revenue)}

        </p>
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
      <p className="text-3xl text-tremor-content-strong 
      dark:text-dark-tremor-content-strong 
      font-semibold">
          $ {addCommasToNumber(aldoData.global_revenue)}

        </p>
      </Card>
    </div>
  </div>
  )
}

export default App
