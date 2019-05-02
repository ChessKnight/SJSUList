import React, { Component } from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';
import Pager from '../PagerComponent/Pager';
import SearchBar from './SearchBar';
import Sort from './Sort';

import ItemForm from '../ItemForm/ItemForm.js';



class ItemCardList extends Component{
    constructor(){
        super()
        this.state={
            data: [],
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data=> this.setState({data}));
        
    }
    

   
    render(){
        return(
        <div class="row">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="add-item">
               <button class="btn add-item-btn">Add Item for Sale</button> 
               <hr></hr>
            </div> 
            <div className="search-filter-sort">
                <SearchBar></SearchBar>
                <Sort></Sort>
            </div>
            <div className="results">
                <h5>Results: {this.state.data.length}</h5>
            </div>
            
            <div>
            <ul class="store-list">
                {this.state.data.map((user, i)=>{
                    return(
                        <div>
                            
                        <ItemCard image= {this.state.data[i].imageSrc} body={this.state.data[i]._id} description={this.state.data[i].description}
                            price={this.state.data[i].price} contact={this.state.data[i].contact}
                            name = {this.state.data[i].name} condition={this.state.data[i].condition}
                        />
                        </div>
                        
                    );
                })}
            </ul>
            <Pager></Pager>
            </div>
              
        </div>
        );
    }
}

export default ItemCardList;

