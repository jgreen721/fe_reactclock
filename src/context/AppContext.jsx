import { useState, useContext, createContext, useEffect } from "react";
import {timeUrl,ipUrl,quotesUrl} from "../const/const"
import { determineGreeting,getCleanTime} from "../utils/helpers";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const ENUM = {
  1: "Morning",
  2: "Afternoon",
  3: "Evening",
};


const images = [
  {
    //morning images [0]
    desktop:"./assets/desktop/bg-image-daytime.jpg",
    tablet:"./assets/tablet/bg-image-daytime.jpg",
    mobile:"./assets/mobile/bg-image-daytime.jpg",
  },

  {

    //night images[1]
    desktop:"./assets/desktop/bg-image-nighttime.jpg",
    tablet:"./assets/tablet/bg-image-nighttime.jpg",
    mobile:"./assets/mobile/bg-image-nighttime.jpg",
}]



export const AppProvider = ({ children }) => {
  const [quote, setQuote] = useState({quote:"here is your quote jerkoff, go inspire ya-selhf n make somethin happen other then a morning shit! Though those are good too.",author:"yours truly"});
  const [currData, setCurrData] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [currBg, setCurrBg] = useState(images[1])


  const toggleInfo=()=>{
    setShowInfo(!showInfo)
    console.log("TogglingInfo from " + !showInfo + " to " + showInfo + '.')
  }

  const fetchQuote=async()=>{
    try{
      let res = await fetch(`${quotesUrl}/random`);
      let data = await res.json()
      console.log("your quote",data)
       setQuote({
         quote:data.content,
         author:data.author
       })
    }
    catch(err){
      console.log("error in fetching quote",err);
    }
  }

  const fetchIp=async()=>{
    try{
      let res = await fetch(`${ipUrl}`);
      let data = await res.json()
      console.log("your ip",data)
      if(data.timezone){
      let response = await fetch(`${timeUrl}/${data.timezone}`)
      let timeData = await response.json();
      console.log(timeData)
      let cleanTime = getCleanTime(new Date(timeData.datetime).toLocaleTimeString())
      let {greeting,imgStatus} = determineGreeting(timeData.datetime)
      setCurrData({
        greeting:greeting,
        timezone:timeData.timezone,
        time:cleanTime,
        abbr:timeData.abbreviation,
        dow:timeData.day_of_week,
        doy:timeData.day_of_year,
        week_number:timeData.week_number,
        nightOverlay:imgStatus == "morning" ? false : true
      })
      setCurrBg(images[imgStatus == "morning" ? 0 : 1])
      }
      else{
        throw("Error in the fetchingTime block")
      }
    }
    catch(err){
      console.log("error in fetching ip or time data.",err);
    }
  }


  useEffect(()=>{
    fetchQuote();
    fetchIp();

  },[])

  const values = {
    currBg,
    quote,
    currData,
    showInfo,
    toggleInfo,
    isEvening,
    fetchQuote
  };


  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
