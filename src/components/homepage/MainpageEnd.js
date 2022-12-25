import React from 'react';
import './MainPage.css'

const MainpageEnd = () => {
    return (
        <div className="page_End">

     <div className="another_SignIn">
        <div>See personalised recommendations</div>
       <div  className='signIn_Button2'>
       <a href=""> <span>Sign In</span></a></div>
        <div>New customer?
          <a href="https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex" className="start_Here">start here</a>
        </div>
        </div> 

        </div>
    );
}

export default MainpageEnd;

