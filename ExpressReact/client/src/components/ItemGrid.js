import React from 'react';
import Item from './Item'

function ItemGrid(props){

    const items = props.itemList.map(item => <Item key={item._id} item = {item} onAdd={props.onAdd}/>)
    console.log(props.itemList)

    return (
        <div className="item-grid">
            {items}
        </div>
    )
    
}

export default ItemGrid;