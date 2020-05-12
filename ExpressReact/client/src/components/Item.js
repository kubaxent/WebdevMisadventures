import React from 'react';

function Item(props){

    let buttonClass = (props.item.stock===0)?"button-disabled":"buy-button"
    let buttonText = (props.item.stock===0)?"Out of stock":"Add to cart"
    
    return (
        <div className="item">
            <img src = {props.item.img} alt = "img"/>
            <h2>{props.item.name}</h2>
            <p>{props.item.price} USD</p>
            <button disabled={props.item.stock===0} className={buttonClass} onClick={() => props.onAdd(props.item)}>{buttonText}</button>
        </div>
    )
    
}

export default Item;
