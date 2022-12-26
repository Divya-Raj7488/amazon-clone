import React from 'react';
import "./MainPage.css"
import Ad from './ads/Ad'
import Ad_4 from './ads/Ad_4';
import MainpageEnd from './MainpageEnd';

const MainPage = () => {
    return (
     <div className="divyaRaj"> 
        <div className="mainPage">
       
      <div className="mainpage_Ads">
      {/* <ad  */}
      <Ad heading='upto 60% off| last chance to win...' URL="https://ik.imagekit.io/t7f1boru6/amazon-images/1_PC_CategoryCard_758X608_D._SY608_CB607449290__-d_uTI_FZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666524460233" Title='See more offers'/>
      <Ad_4
      heading="Finale offers on travel tickets"
      URL1="https://ik.imagekit.io/t7f1boru6/amazon-images/1-Flight_PC_QuadCard_372X232-1._SY232_CB609008661___1__1Yevz4q91.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666534993808"
      URL2="https://ik.imagekit.io/t7f1boru6/amazon-images/Bus_PC_QuadCard_372X232-1._SY232_CB609008661__krwq-VItr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666270205888"
      URL3="https://ik.imagekit.io/t7f1boru6/amazon-images/Train_PC_QuadCard_372x232._SY232_CB609008661__Y55jUDDaH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666270207898"
      URL4="https://ik.imagekit.io/t7f1boru6/amazon-images/Travel-accessories_2_PC_QuadCard_372X232._SY232_CB607257935__lAYJb8tsE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666270207975"
     Title="Finale offers on travel tickets"
      />
       <Ad_4
      heading="Finale offers on travel tickets"
      URL1="https://ik.imagekit.io/t7f1boru6/amazon-images/1-Flight_PC_QuadCard_372X232-1._SY232_CB609008661___1__1Yevz4q91.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666534993808"
      URL2="https://ik.imagekit.io/t7f1boru6/amazon-images/Bus_PC_QuadCard_372X232-1._SY232_CB609008661__krwq-VItr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666270205888"
      URL3="https://ik.imagekit.io/t7f1boru6/amazon-images/Train_PC_QuadCard_372x232._SY232_CB609008661__Y55jUDDaH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666270207898"
      URL4="https://ik.imagekit.io/t7f1boru6/amazon-images/Travel-accessories_2_PC_QuadCard_372X232._SY232_CB607257935__lAYJb8tsE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666270207975"
     Title="Finale offers on travel tickets"
      />
      <Ad heading='upto 60% off| last chance to win...' URL="https://ik.imagekit.io/t7f1boru6/amazon-images/1_PC_CategoryCard_758X608_D._SY608_CB607449290__-d_uTI_FZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666524460233" Title='See more offers'/>
      
        <MainpageEnd/>     
      </div>
      </div>
      </div> 
    );     
}

export default MainPage;
