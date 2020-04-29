import React from 'react';

function Sortbar(props){
    return(
        <div className="sortbar">
            <table>
                <tbody>
                    <tr>
                        <th className="sort-item" onClick={() => props.onSort(0)}>Name</th>
                        <th className="sort-item" onClick={() =>props.onSort(1)}>Description</th>
                        <th>Image</th>
                        <th className="sort-item" onClick={() =>props.onSort(3)}>Rating</th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Sortbar