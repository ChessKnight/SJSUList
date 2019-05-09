import React from 'react';
import './ItemButton.css'

const ItemButton =(props)=>{

    if(props.canDelete){
        return(
            <div>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                <button className="itemButton" onClick={props.delete}> <i class="fas fa-trash"></i></button>
            </div>
        );
    }
    else{
        return(
             <div>

             </div>
    );
    }
}

export default ItemButton;
    