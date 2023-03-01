import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

function Home() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>    
  )
}

export default Home