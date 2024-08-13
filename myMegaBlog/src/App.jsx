import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()
  //   .then((userData) => {
  //     if (userData) {
  //       dispatch(login({userData}))
  //     } else {
  //       dispatch(logout())
  //     }
  //   })
  //   .finally(() => setLoading(false))
  // }, [])
  // return !loading ? (
  return(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App