import React from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';
import Pager from '../PagerComponent/Pager'

const ItemCardList = () =>{
    return(
    <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <ul class="store-list">
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
        </ul>
        <Pager/>
    </div>
    );
}

export default ItemCardList;

