import React, { useContext, useState } from 'react'
import LoaderCard from '../../Components/LoaderCard/LoaderCard'
import { IoCloseCircle } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import LoadersData from '../../Loaders/Loaders';
import { CategoryContext } from '../CategoryContext';
import './LoaderPage.css'

export default function LoaderPage() {
  const [reactCopied, setReactCopied] = useState(false)
  const [cssCopied, setCssCopied] = useState(false)
  const { category, selectedLoader } = useContext(CategoryContext)
  const [isModelOpen, setIsModelOpen] = useState(false)
  const handleOpenModel = () => {
    setIsModelOpen(true)
  }
  const closeModel = () => {
    setIsModelOpen(false)
  }
  const filteredLoaders = LoadersData.filter(
    (loader) => loader.category === category
  )
  const selectedLoaderIs = LoadersData.find(
    (loader) => loader.id === selectedLoader
  )
  const copyCode = async (code) => {
    if (code === 'react') {
      await navigator.clipboard.writeText(selectedLoaderIs.react)
      setReactCopied(true)
      setTimeout(() => {
        setReactCopied(false)
      }, 3000);
    }
    if (code === 'css') {
      await navigator.clipboard.writeText(selectedLoaderIs.css)
      setCssCopied(true)
      setTimeout(() => {
        setCssCopied(false)
      }, 3000);
    }
  }
  return (
    <div className={`loader-container ${isModelOpen ? 'hide-loaders' : ''}`}>
      {
        filteredLoaders.map((loader) => {
          return (
            <LoaderCard key={loader.id} loader={loader} onOpenModel={handleOpenModel} />
          )
        })
      }
      <div className={`model-overlay ${isModelOpen ? 'open' : ''}`}>
        <div className='model'>
          <div className='close-model'>
            <IoCloseCircle className='close-icon' onClick={closeModel} />
          </div>
          <div className='model-content'>
            <div className='model-left'>
              <div className='code-box'>
                <div className='codebox-head'>
                  <p className='head'>
                    react
                  </p>
                  <button className='copy' onClick={() => copyCode('react')}>{reactCopied ? 'copied' : 'copy'}<MdContentCopy /></button>
                </div>
                <pre className='codebox-body'>
                  {selectedLoaderIs && selectedLoaderIs.react}
                </pre>
              </div>
              <div className='code-box'>
                <div className='codebox-head'>
                  <p className='head'>
                    css
                  </p>
                  <button className='copy' onClick={() => copyCode('css')}>{cssCopied ? 'copied' : 'copy'}<MdContentCopy /></button>
                </div>
                <pre className='css codebox-body'>
                  {selectedLoaderIs && selectedLoaderIs.css}
                </pre>
              </div>
            </div>
            <div className='model-right'>
              <div className='model-right-loader'>
                {selectedLoaderIs && selectedLoaderIs.component}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
