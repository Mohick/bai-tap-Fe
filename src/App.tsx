import { useState } from 'react'
import Loading from './pages/nhan-loading/loading'
import HomePage from './home'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        {/* <Loading/> */}
        <HomePage/>
      </h1>
    </>
  )
}

export default App
