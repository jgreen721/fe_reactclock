import React from 'react'
import {Quote, Clock,InfoButton} from "../../components"
import { useAppContext } from '../../context/AppContext'
import "./FlexContainer.css"

const FlexContainer = () => {
    const {showInfo} = useAppContext();
  return (
    
    <div className="flex-parent-container">
        <div className={showInfo ? "top-row" : "top-row rise"}>
            <Quote/>
        </div>
        <div className={showInfo ? "bottom-row" : "bottom-row rise"}>
            <Clock/>
            <InfoButton/>
        </div>
    </div>
  )
}

export default FlexContainer