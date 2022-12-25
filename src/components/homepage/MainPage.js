import React from 'react';
import "./MainPage.css"
import Ad1 from './ads/Ad1';
import Ad4 from './ads/Ad4';
import Ad2 from './ads/Ad2';
import Ad3 from './ads/Ad3';
import Ad5 from './ads/Ad5';
import Ad6 from './ads/Ad6';
import MainpageEnd from './MainpageEnd';

const MainPage = () => {
    return (
     <div className="divyaRaj"> 
        <div className="mainPage">
       
      <div className="mainpage_Ads">
        <Ad1/>
        <Ad4/>
        <Ad2/>
        <Ad3/>
        <Ad5/>
        <Ad5/>
        <Ad5/>
         <Ad5/>
        <Ad6/>  
        <MainpageEnd/>     
      </div>
      </div>
      </div> 
    );     
}

export default MainPage;
