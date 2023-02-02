import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Nasa from "./components/nasa";
import { useState, useEffect } from "react";

const dummy=
{
  "copyright": "Michael Carroll",
  "date": "2023-02-01",
  "explanation": "Seven worlds orbit the ultracool dwarf star TRAPPIST-1. A mere 40 light-years away, many of the exoplanets were discovered in 2016 using the Transiting Planets and Planetesimals Small Telescope (TRAPPIST) located in the Atlas Mountains of Morocco, and later confirmed with telescope including NASA's Spitzer Space Telescope. The TRAPPIST-1 planets are likely all rocky and similar in size to Earth, and so compose one of the largest treasure troves of terrestrial planets ever detected around a single star. Because they orbit very close to their faint, tiny star they could also have regions where surface temperatures allow for the presence of ice or even liquid water, a key ingredient for life. Their tantalizing proximity to Earth makes them prime candidates for future telescopic explorations of the atmospheres of potentially habitable planets.  All seven exoplanets appear in the featured illustration, which imagines a view from the most distant known world of this system, TRAPPIST-1h, as having a rocky landscape covered in ice. Meanwhile, in the imagined background, one of the system's inner planets crosses in front of the dim, orange, nearly Jupiter-sized parent star.   Astrophysicists: Browse 3,000+ codes in the Astrophysics Source Code Library",
  "hdurl": "https://apod.nasa.gov/apod/image/2302/Trappist1h_Carroll_1238.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "The Seventh World of Trappist-1",
  "url": "https://apod.nasa.gov/apod/image/2302/Trappist1h_Carroll_960.jpg"
  }


  
function App() {

  const [data, setData]=useState(dummy);
  const [tarih, setTarih]=useState("2023-02-02");
  

  const changeHandler=(e)=>{
    setTarih(e);
  }

  useEffect(()=>{
    axios.get ('https://api.nasa.gov/planetary/apod?date='+tarih+'&api_key=wMulJJXgW7eBvlMNcmIcN3vvIySVmaepy8Kms0GQ')
      .then(res=>
        {setData(res.data)})
  }, [tarih])

  return (
    <div className="App">
      <Header />
      <Search changeHandler={changeHandler} tarih={tarih}/>
      <Nasa data={data}/>

    </div>
  );
}

export default App;
