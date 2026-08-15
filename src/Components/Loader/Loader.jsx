import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
    <div className='loader'>
      <p className='lleft'></p>
      <p className='lbottom'></p>
      <div className='circle'>
        <div className='circle-outside'></div>
        <div className='circle-inside'></div>
      </div>
      <div className='text-cover'></div>
      <p className='loader-text'>adify</p>
    </div>
  )
}