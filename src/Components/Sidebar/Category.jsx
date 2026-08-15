import React, { useContext, useState } from 'react'
import LoadersData from '../../Loaders/Loaders'
import { CategoryContext } from '../../Pages/CategoryContext'
import './Category.css'

export default function Category() {
  const { setCategory } = useContext(CategoryContext)
  const CategoryData = Object.values(
    LoadersData.reduce((acc, loader) => {
      loader = loader.category
      if (!acc[loader]) {
        acc[loader] = {
          name: loader,
          count: 0
        }
      }
      acc[loader].count++
      return acc
    }, {})
  )
  return (
    <div className='category-conatiner'>
      {
        CategoryData.map((loader) => {
          return (
            <button className='category' key={loader.name} onClick={() => setCategory(loader.name)}>{loader.name}<span className='count'>{loader.count}</span></button>
          )
        })
      }
    </div>
  )
}
