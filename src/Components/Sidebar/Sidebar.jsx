import React, { useState } from 'react'
import Loader from '../Loader/Loader'
import Category from './Category'
import Footer from './Footer'
import { TiThMenu } from "react-icons/ti";
import './Sidebar.css'

export default function Sidebar() {
    const [showCategory, setShowCategory] = useState(false)
    return (
        <div className='sidebar-container'>
            <div className='loader-area'>
                <Loader />
                <button className='toggler-button' onClick={() => { setShowCategory(!showCategory) }}><TiThMenu /></button>
            </div>

            <div className={`sidebar-category ${showCategory ? 'show' : ''}`}>
                <Category />
            </div>
            <div className={`sidebar-footer ${showCategory ? 'showFooter' : ''}`}>
                <Footer />
            </div>
        </div>
    )
}
