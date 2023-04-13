import React from 'react'
import About from './component/About'
import Button from './component/Button'
import Home from './component/Home' 
function App() {
  return (
    <div className='app'>
      <Home name="wassim" age="22"/>
      <Home name="ahmed" age="20"/>
      <About title="prod1" price="100"/>
      <About title="prod2" price="180"/>
      <About title="prod1" price="210"/>
    </div>
  )
}

export default App

