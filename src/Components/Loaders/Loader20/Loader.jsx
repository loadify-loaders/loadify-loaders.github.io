import React from 'react'
import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles['loader']}>
            <div className={styles['circle1']}>
                <div className={styles['bar1']}>
                    <div className={styles['bar2']}></div>
                </div>
                <div className={styles['circle2']}></div>
            </div>
        </div>
    )
}
