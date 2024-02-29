import { useState } from 'react'
import { Card, DonutChart, LineChart , Metric, Text } from '@tremor/react';
import barbieData from './movie-barbie.json'
import aldoData from './movie-aldo.json'
import './App.css'
const chartData = barbieData.domestic_daily.map(({revenue, date}) => {
  const aldoLSData = aldoData.domestic_daily.find(opp => opp.date === date)
  return {
    date,
    Barbie: revenue,
    Aldo: aldoLSData ? aldoLSData.revenue : 0
  }
})



// const chartdata = [
//   {
//     date: 'Jan 22',
//     SemiAnalysis: 2890,
//     'The Pragmatic Engineer': 2338,
//   },
//   {
//     date: 'Feb 22',
//     SemiAnalysis: 2756,
//     'The Pragmatic Engineer': 2103,
//   },
//   {
//     date: 'Mar 22',
//     SemiAnalysis: 3322,
//     'The Pragmatic Engineer': 2194,
//   },
//   {
//     date: 'Apr 22',
//     SemiAnalysis: 3470,
//     'The Pragmatic Engineer': 2108,
//   },
//   {
//     date: 'May 22',
//     SemiAnalysis: 3475,
//     'The Pragmatic Engineer': 1812,
//   },
//   {
//     date: 'Jun 22',
//     SemiAnalysis: 3129,
//     'The Pragmatic Engineer': 1726,
//   },
//   {
//     date: 'Jul 22',
//     SemiAnalysis: 3490,
//     'The Pragmatic Engineer': 1982,
//   },
//   {
//     date: 'Aug 22',
//     SemiAnalysis: 2903,
//     'The Pragmatic Engineer': 2012,
//   },
//   {
//     date: 'Sep 22',
//     SemiAnalysis: 2643,
//     'The Pragmatic Engineer': 2342,
//   },
//   {
//     date: 'Oct 22',
//     SemiAnalysis: 2837,
//     'The Pragmatic Engineer': 2473,
//   },
//   {
//     date: 'Nov 22',
//     SemiAnalysis: 2954,
//     'The Pragmatic Engineer': 3848,
//   },
//   {
//     date: 'Dec 22',
//     SemiAnalysis: 3239,
//     'The Pragmatic Engineer': 3736,
//   },
// ];

const valueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};



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
    <div>
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
  <Card className='mt-5'>
     <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
       Daily Revenue Report
      </h3>
      <LineChart
        className="mt-4 h-72"
        data={chartData}
        index="date"
        yAxisWidth={90}
        categories={['Barbie', 'Aldo']}
        colors={['indigo', 'cyan']}
        valueFormatter={addCommasToNumber}
      />
    </Card>
    </div>
  )
}

export default App
