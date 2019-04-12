import React from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';
import Pager from '../PagerComponent/Pager'

import ItemForm from '../ItemForm/ItemForm.js';

const ItemCardList = () =>{
    return(
    <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
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
<<<<<<< HEAD

            
=======
        <Pager/>
>>>>>>> 0645de9d22cf58c2ccc25792b76daa67d5512f2d
    </div>
    );
}

export default ItemCardList;

