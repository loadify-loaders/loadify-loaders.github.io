import React, { useContext } from 'react'
import { FaCode } from "react-icons/fa"
import { CategoryContext } from '../../Pages/CategoryContext'
import './LoaderCard.css'

export default function LoaderCard({ onOpenModel, loader }) {
  const { setSelectedLoader } = useContext(CategoryContext)
  return (
    <div className='loadercard'>
      <div className='loadercard-top'>
        {loader.component}
      </div>
      <div className='loadercard-bottom'>
        <button className='view-code' onClick={() => { setSelectedLoader(loader.id); onOpenModel() }}><FaCode /></button>
      </div>
    </div>
  )
}
