import React from 'react';

function Container( {item} ){
    return(
        <div>
            <img src={item.image} alt={item.name} width="400px" height="400px" />
        </div>
    );
}

export default Container;