import React from 'react';

function Toolbar(props){
    return(
        <div className="toolbar">
            <button onClick={() => props.onAddPoster()}>Add poster</button>
            <input type="text" placeholder="Search for poster" onChange={props.onFilter}></input>
        </div>
    )
}

export default Toolbar