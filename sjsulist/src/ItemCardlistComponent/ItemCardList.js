import React from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';

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
        <div >
            <ul class="pagination pager">
                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <li class="active"><a href="#!">1</a></li>
                <li class="waves-effect"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="waves-effect"><a href="#!">4</a></li>
                <li class="waves-effect"><a href="#!">5</a></li>
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
            </ul>
        </div>
        
    </div>
    );
}

export default ItemCardList;

