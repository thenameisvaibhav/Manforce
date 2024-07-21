import React from 'react'
import Loader from './components/Loader'
import Landing from './components/Landing'

const App = () => {
  return (
    <div className='w-full bg-black'>
      <Loader/>
      <Landing/>
    </div>
  )
}

export default App