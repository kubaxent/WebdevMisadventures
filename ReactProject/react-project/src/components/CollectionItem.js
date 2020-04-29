import React from 'react';

function CollectionItem(props){
    return(
        <div className="collection-item">
            <table>
                <tbody>
                    <tr>
                        <th><textarea className="poster-input" name="name" id={props.item.id} type="text" value={props.item.name} onChange={props.onChangeFunction}/></th>
                        <th><textarea className="poster-input-smaller" name="description" id={props.item.id} type="text" value={props.item.description} onChange={props.onChangeFunction}/></th>
                        <th><img src={props.item.image} alt="Poster"/></th>
                        <th><textarea className="poster-input" name="rating" id={props.item.id} type="text" value={props.item.rating} onChange={props.onChangeFunction}/></th>
                        <th><button onClick = {() => props.onRemovePoster(props.item.id)}>Remove</button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CollectionItem;