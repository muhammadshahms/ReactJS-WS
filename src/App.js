import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './header'
import Home from './home'

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='header' element={<Header/>} ></Route>
</Routes>
</BrowserRouter>
  )
}
