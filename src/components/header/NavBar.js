import React from 'react';
import "./NavBar.css"



const NavBar = () => {
    return ( 
    
<div>
       <div className="navBar">
{/* logo */}
        <div className="navbar_Logo">
      <div className="navbar_Image"></div>
      <span>.in</span>
    </div>
{/* location */}
        <a href="" className="navbar_Location">
        <div className="location_Icon"></div>
         <div className="navbar_Deliver">Deliver to
        <div className="navbar_Text">Your Location here</div>
        </div>
        </a>  

        {/* searchbox */}

        <div className="navbar_Searchbox">
         <select className="navbar_Dropdown">
            <option value="">All</option>
            <option value="">Beauty</option>
            <option value="">Baby products</option>
            <option value="">Fashion</option>
            <option value="">Electronics</option>
            <option value="">Mobiles</option>
            <option value="">Kitchen Appliances</option>
            <option value="">Grocery</option>
            <option value="">Books</option>
            <option value="">Apps and Games</option>
            <option value="">Amazon Pharmacy</option>
          </select>
          <input type="text" className="navbar_Searchbar" id="" /> 
       
          <input type="submit" className="submit_Button" value="" />     
        </div>
       {/* language */}
       
        <div className="navbar_Language">
          <div className="flagIcon"></div>
          <div className="dropIcon"></div>
        </div>

{/* sign in */}

       <a href="" className="navbar_SignIn">
        <div className="SignIn">Hello,Sign In
          <div className="Account_Lists">Account & Lists</div>
        </div>
       </a>
{/* returns & orders */}
        <a href="" className="returns_Orders">
          <div className="navbar_Returns">Returns 
            <div className="navbar_Orders">& Orders</div>
          </div>
     </a>

{/* Cart */}
<div className="cart_Icon">
 <a className="navbar_Cart"></a>
 <div className="Cart">Cart</div>
 </div>
 </div>
 
   </div>
    );   
}

export default NavBar;

