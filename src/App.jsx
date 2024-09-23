import { useState } from 'react'

import './App.css'
import Counter from './Components/Counter'
function App() {
  

  return (
    <>
   <h1 className='mt-5 text-center'>Counter App</h1>
   <div style={{height:'70vh'}} className="d-flex justify-content-center align-items-center w-100">
    <Counter/>
   </div>

    </>
  )
}

export default App
