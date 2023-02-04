import React from 'react'
import "./InfoButton.css"
import { useAppContext } from '../../context/AppContext'
const upArrow = "./assets/desktop/icon-arrow-up.svg"
const downArrow = "./assets/desktop/icon-arrow-down.svg"

const smallUpArrow = "./assets/desktop/smallarrowup.svg"
const smallDownArrow = "./assets/desktop/smallarrowdown.svg"

const InfoButton = () => {
  const {showInfo,toggleInfo} = useAppContext();

  return (
    <button onClick={toggleInfo} className="info-btn">
      {showInfo ? "More" : "Less"}
      <span className="img-span">
      <img className='arrow-icon' src={showInfo ? upArrow : downArrow} alt="arrow" />
      </span>
      {/* <img className='mobile-arrow-icon' src={showInfo ? smallUpArrow : smallDownArrow} alt="arrow" /> */}
    </button>
  )
}

export default InfoButton