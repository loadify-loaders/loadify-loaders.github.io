import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import LoaderPage from '../LoaderPage/LoaderPage'
import { CategoryContext } from '../CategoryContext'
import './Home.css'

export default function Home() {
  const [category, setCategory] = useState('circle')
  const [selectedLoader, setSelectedLoader] = useState(null)
  return (
    <CategoryContext.Provider value={{ category, setCategory, selectedLoader, setSelectedLoader }}>
      <div className='home-container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='loader-cards'>
          <LoaderPage />
        </div>
      </div>
    </CategoryContext.Provider>
  )
}
