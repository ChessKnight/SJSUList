import React, { Component } from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';
import Pager from '../PagerComponent/Pager'

import ItemForm from '../ItemForm/ItemForm.js';



class ItemCardList extends Component{
    constructor(){
        super()
        this.state={
            data: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data=> this.setState({data}));
    }
    

   
    render(){
    
        
        return(
        <div className="card-list">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            
            <div>
            <ul class="store-list">
                {this.state.data.map((user, i)=>{
                    return(
                        <ItemCard body={this.state.data[i].description} userId={this.state.data[i].id}/>
                    );
                })}
            </ul>
            <Pager></Pager>
            </div>
            <div className="item-form">
                <ItemForm></ItemForm>    
            </div>    
        </div>
        );
    }
}

export default ItemCardList;

