import React, { useEffect, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles['loader']}>
            <span></span>
            <div className={styles['loader-body']}>
                <p></p>
            </div>
        </div>
    )
}