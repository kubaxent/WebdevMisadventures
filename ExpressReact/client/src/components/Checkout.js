import React from 'react';
import CheckoutItem from './CheckoutItem';

import {
    Link
  } from "react-router-dom";

function Checkout(props){

    let items = props.items.map(item => <CheckoutItem key={item._id} item={item} onRemove={props.onRemove}/>)
    return (
        <div className="checkout">
            {items}
            <button className="buy-button" onClick={() => props.onBuy(props.items)}>Buy</button>
            <Link to="/" className="navbar-button-link">Back to shop</Link>
        </div>
    )
    
}

export default Checkout;