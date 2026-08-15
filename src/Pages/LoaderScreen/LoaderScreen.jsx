import React from 'react'
import Loader from '../../Components/Loader/Loader'
import styles from './LoaderScreen.module.css'

export default function LoaderScreen() {
  return (
    <div className={styles['loader-page']}>
      <Loader />
    </div>
  )
}
