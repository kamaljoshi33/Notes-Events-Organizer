import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Header from './Component/header'
// import SimpleTextPage from './Component/SimpleTextPage'
import Main from './Component/Main'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path='/data' element={<Header/>}/>
    <Route path='/page' element={<SimpleTextPage/>}/> */}
    <Route path='/page' element={<Main/>}/> 

   </Routes>
   </BrowserRouter>
  )
}

export default App