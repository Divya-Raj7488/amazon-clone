import React from 'react'
import "./Ad_4.css"

const Ad_4 = (props) => {
  return (
    <div className="ad4_Page">
      <h1 className="ad1_Header"> {props.heading} </h1>
      <div className="ad4_Image">
        <img src={props.URL1} alt="" />
        <img src={props.URL2} alt="" />
        <img src={props.URL3} alt="" />
        <img src={props.URL4} alt="" />
      </div>
      <div className="ad1_Footer"> {props.Title} </div>
    </div>
  )
}

export default Ad_4
