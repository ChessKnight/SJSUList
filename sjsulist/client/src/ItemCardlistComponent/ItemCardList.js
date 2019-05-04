import React, { Component } from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';
import Pager from '../PagerComponent/Pager';
import SearchBar from '../Tools/SearchBar';
import Sort from '../Tools/Sort';

import ItemForm from '../ItemForm/ItemForm.js';



class ItemCardList extends Component{
    constructor(){
        super()
        this.state={
            data: [],
            constantData:[],
            searchString: "",
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data=> this.setState({data},this.setState({constantData:data})));
        
    }
 //this is for sorting   
    sort=(event)=>{

        console.log("l");
    }
//This filters the list based on the search
    searchClicked=(event)=>{
        var c = this.state.constantData;
        var d = [];
        var s = this.state.searchString;
        for(var i=0; i<c.length; i++){
            
            if(c[i].description.includes(s))
            {
                d.push(c[i]);
            }
        }
        this.setState({data: d});
        console.log(this.state.data);

    }
//this is a hlper for searching
    searching=(event)=>{
        this.setState({searchString:event.target.value});
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
                <SearchBar searchClicked={this.searchClicked} searching={this.searching}></SearchBar>
                <Sort sortApplied={this.sort}></Sort>
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

