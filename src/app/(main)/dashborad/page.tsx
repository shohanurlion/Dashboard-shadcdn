import React from 'react'
import ChartBar from './_components/Chart'
import AppAreaChart from './_components/AppAreaChart'
import { ChartPieLabel } from './_components/PaiChart'

const Dashborad = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
      <div className='bg-gray-600 col-span-2'>
        <ChartBar />
      </div>
      <div className='bg-gray-600'>Test 1</div>
      <div className='bg-gray-600'>
        <ChartPieLabel />
      </div>
      <div className='bg-gray-600'>Test 1</div>
      <div className='bg-gray-600 col-span-2'>
        <AppAreaChart />
      </div>
      <div className='bg-gray-600'>Test 1</div>
    </div>
  )
}

export default Dashborad