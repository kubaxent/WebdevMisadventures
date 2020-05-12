import React from 'react';

function CheckoutItem(props){
    
    return (
        <div className="checkout-item">
            {props.item.name}
            <button className="navbar-button" onClick={() => props.onRemove(props.item._id)}>Remove</button>
        </div>
    )
    
}

export default CheckoutItem;