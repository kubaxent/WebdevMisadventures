import React from 'react';

import {
    Link
  } from "react-router-dom";

/*
<Link to="/dashboard">
     <button type="button">
          Click Me!
     </button>
 </Link>
*/

function Navbar(props){
    
    return (
        <div className="navbar">
            <Link to="/checkout" className="navbar-button-link">Your cart</Link>
        </div>
    )
    
}

export default Navbar;