import React from 'react'
import { useAppContext } from '../../context/AppContext'
import "./Clock.css"

const Clock = () => {
  const {isEvening,currData} = useAppContext();

  console.log(currData)
  return !currData?.abbr ? "Loading..." :  (
    <div className={currData.nightOverlay ? "clock-card white-text" : "clock-card"}>
      <h5 className="greeting-h5">
        <img src={isEvening ? "./assets/desktop/icon-sun.svg" : "assets/desktop/icon-moon.svg"} alt="" /> 
        {currData.greeting}, <span className="hide-mobile">it's currently - </span>
      </h5>
      <h1 className="clock-h1">
        {currData.time}
        <span className="dst">{currData.abbr}</span>

      </h1>
      <h5 className="location-h5">
        In {currData.timezone}
      </h5>

    </div>
  )
}

export default Clock