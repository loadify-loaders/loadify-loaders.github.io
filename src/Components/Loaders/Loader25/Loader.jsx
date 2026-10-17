import React from 'react'
import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles['loader']}>
            <div className={styles['bar']}>
                <div className={styles['bar1-dot']}></div>
            </div>
            <div className={styles['bar']}>
                <div className={styles['bar2-dot']}></div>
            </div>
            <div className={styles['bar']}>
                <div className={styles['bar3-dot']}></div>
            </div>
        </div>
    )
}