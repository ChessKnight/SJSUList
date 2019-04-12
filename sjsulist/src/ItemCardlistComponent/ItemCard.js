import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './ItemCard.css'

const ItemCard = () =>{
    return(
        <div className="item-card">
            <div className="item-first-sec">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <img alt="item" className="item-img" src='img/sample-book.jpeg'></img>
                <div className="item-info">
                    <div className="item-seller">
                        <i class="fa fa-user"></i>
                        <p>Seller: </p>
                    </div>
                    <div className="item-seller"> 
                        <i class="fa fa-money"></i>
                        <p className="item-seller">Price:</p>
                    </div>
                
                </div>
            </div>
            <div className="item-second-sec">
                <div className="item-desc"> 
                    <i class="fa fa-book"></i>
                    <p className="item-seller">Description:</p>
                </div>
                <div className="item-button">
                    <button className="add-button">add to wishlist</button>
                    <button className="add-button">add to cart</button>
                </div>
            </div>
            <i class="material-icons book-mark">bookmark_border</i>
        </div>
    );
}

export default ItemCard;