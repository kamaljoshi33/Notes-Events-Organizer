import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Component/header'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/data' element={<Header/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App