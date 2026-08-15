import React from 'react'
import { FaGithubSquare, FaLinkedin, FaLink } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-icons'>
        <a href="https://github.com/akh7il/" target='_blank' className='icons'><FaGithubSquare /></a>
        <a href="www.linkedin.com/in/akhil-madhu01" target='_blank' className='icons'><FaLinkedin /></a>
        <a href="https://akhil-madhu.vercel.app/" target='_blank' className='icons'><FaLink /></a>
      </div>
      <div className='footer-message'>
        <p>made with <span className='heart'><IoHeart /></span>  akhil</p>
      </div>
    </div>
  )
}
