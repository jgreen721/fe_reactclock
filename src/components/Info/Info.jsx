import React from 'react'
import { useAppContext } from '../../context/AppContext'
import "./Info.css"

const Info = () => {
  const {showInfo,currData} = useAppContext()

  return currData ? (
    <div className={showInfo ? "info-card hide-card" : "info-card"}>
         {/* <div className="test-row">
        <h1 className="test-h1">Lorem, ipsum.</h1>
        <h1 className="test-h1">Lorem, ipsum.</h1>
      </div> */}
              <div className={currData.nightOverlay ? "info-overlay dark" : "info-overlay"}></div>

      <div className={currData.nightOverlay ? "info-flex white-text" : "info-flex"}>
        <div className="info-col">
        <div className="info-item">
          <h4 className="info-category">Current Timezone</h4>
          <h1 className="info-h1">{currData.timezone}</h1>
        </div>
        <div className="info-item">
          <h4 className="info-category">Day of the week</h4>
          <h1 className="info-h1">{currData.dow}</h1>
        </div>
        </div>
        <div className="partition"></div>
        <div className="info-col">
        <div className="info-item">
          <h4 className="info-category">Day of the year</h4>
          <h1 className="info-h1">{currData.doy}</h1>
        </div>
        <div className="info-item">
          <h4 className="info-category">Week number</h4>
          <h1 className="info-h1">{currData.week_number}</h1>
        </div>
        </div>
      </div>
   
    </div>
  ) : "Loading..."
}

export default Info