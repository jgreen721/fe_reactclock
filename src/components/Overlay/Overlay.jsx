import React from 'react'
import "./Overlay.css"
import { useAppContext } from '../../context/AppContext'


const Overlay = () => {
    const {currBg} = useAppContext()
  return (
    <div className="bg-overlay">
      <picture>
          <source media="(min-width:768px)" srcSet={currBg.desktop} />
          <source media="(min-width:375px)" srcSet={currBg.tablet} />
          <img className="bg-img" src={currBg.mobile}  alt="img"/>
    </picture>
    </div>
  )
}

export default Overlay