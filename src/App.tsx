import { useState } from 'react'
import Loading from './pages/nhan-loading/loading'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <Loading />
      </h1>
    </>
  )
}

export default App
