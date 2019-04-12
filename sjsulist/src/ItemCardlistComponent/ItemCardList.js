import React from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';

import ItemForm from '../ItemForm/ItemForm.js';

const ItemCardList = () =>{
    return(
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <ul class="store-list">
            
            <ItemForm></ItemForm>

            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
        </ul>

            
    </div>
    );
}

export default ItemCardList;

