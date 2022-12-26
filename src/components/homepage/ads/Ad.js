import React from 'react'
import "./Ad.css"

const Ad = (props) => {
  return (
   <div className="ad1_Page">
    <h1 className="ad1_Header">{props.heading}</h1>
    <div className="ad1_Image"><img src={props.URL} alt="" /></div>
    <div className="ad1_Footer">{props.Title}</div>
   </div>
  )
}

export default Ad;
