import { useState } from 'react'
import { Card, DonutChart, Metric, Text } from '@tremor/react';
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
  <div className='grid lg:grid-cols-2 gap-12
  grid-cols-1 max-w-screen-xl'>
    
    <div className='grid md:grid-cols-2 gap-12
  grid-cols-1'>
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Barbie</h2>
      <img src={barbieData.poster_path} alt="" srcset="" />
      </div>
      <div className='flex flex-col gap-4'>
      <div className="space-y-3">
        <span className="text-center block 
        font-mono 
         font-bold text-xl
        dark:text-dark-tremor-content">
          User Rating
        </span>
        <div className="flex justify-center">
          <DonutChart
            data={[
              {
                name: 'like',
                userScore: Math.round(barbieData.vote_average),
              },
              {
                name: 'dislike',
                userScore: Math.round(10 - barbieData.vote_average),
              }                        
            ]}
            colors={['indigo', 'cyan']}
            category='userScore'
            variant="donut"
            label={`${Math.round(barbieData.vote_average * 10)}%`}
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </div>
      
     
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
      <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default
       text-tremor-content 
       dark:text-dark-tremor-content">Budget</p>
      <p className="text-3xl text-tremor-content-strong 
      dark:text-dark-tremor-content-strong 
      font-semibold">
          $ {addCommasToNumber(barbieData.budget)}

        </p>
        
      </Card>
      </div>
      </div>
      
    
    <div>
      <h2 className='text-2xl font-bold'>Aldo</h2>
      <div className='grid md:grid-cols-2 gap-12
  grid-cols-1'>
      <img src={aldoData.poster_path} alt="" srcset="" />
     
      <div className='flex flex-col gap-4'>
      <div className="space-y-3">
        <span className="text-center block 
        font-mono 
         font-bold text-xl
        dark:text-dark-tremor-content">
          User Rating
        </span>
        <div className="flex justify-center">
          <DonutChart
            data={[
              {
                name: 'like',
                userScore: Math.round(aldoData.vote_average),
              },
              {
                name: 'dislike',
                userScore: Math.round(12 - aldoData.vote_average),
              }                        
            ]}
            colors={['indigo', 'cyan']}
            category='userScore'
            variant="donut"
            label={`${Math.round(aldoData.vote_average * 10)}%`}
            onValueChange={(v) => console.log(v)}
          />
        </div>
      </div>
      <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content 
      dark:text-dark-tremor-content">Sales</p>
      <p className="text-3xl text-tremor-content-strong 
      dark:text-dark-tremor-content-strong 
      font-semibold">
          $ {addCommasToNumber(aldoData.global_revenue)}

        </p>
        
      </Card>

      <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Budget</p>
      <p className="text-3xl text-tremor-content-strong 
      dark:text-dark-tremor-content-strong 
      font-semibold">
          $ {addCommasToNumber(aldoData.budget)}

        </p>
        
      </Card>
      </div>
      </div>
      
    </div>
  </div>
  )
}

export default App
