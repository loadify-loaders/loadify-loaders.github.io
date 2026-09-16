import React from 'react'
import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles['loader']}>
            <div className={styles['circle-left']}></div>
            <div className={styles['circle-right']}></div>
            <div className={styles['stick']}></div>
        </div>
    )
}
