import React, { Component } from 'react';
import ItemCard from './ItemCard';
import './ItemCardList.css';
import Pager from '../PagerComponent/Pager';
import SearchBar from '../Tools/SearchBar';
import Sort from '../Tools/Sort';
import Loader from '../Tools/Loader';

//import ItemForm from '../ItemForm/ItemForm.js';



class ItemCardList extends Component{
    constructor(){
        super()
        this.state={
            data: [],
            constantData:[],
            searchString: "",
            loader: true,
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data=> {this.setState({data},this.setState({constantData:data, loader: false}))});
        
    }



 //this is for sorting   
    sort=(v)=>{

        //console.log('from sort item', v)

        const a = this.state.constantData;
        //console.log(a)
        
        let newList = []; 

        for (var i = 0; i < a.length; i++) {

            // sorting items in reverser order
            if ((a[i]=== true)  && (v === "Most Recent")) {
                newList.reverse()
            }
            // sorting items in less then 100
            else if (a[i].price < 100 && (v === "price<100")) {
                newList.push(a[i])
            }

            // sorting items in 100-200 price range
            else if ((a[i].price > 99) && (a[i].price <  201) && (v === "price 100-200")) {
                newList.push(a[i])
            }

            // sorting items in 200-300 price range
            else if ((a[i].price > 199) && (a[i].price < 301) && (v === "price 200-300")) {
                newList.push(a[i])
            }

            // sorting items in 300-400 price range
            else if ((a[i].price > 299) && (a[i].price < 401) && (v === "price 200-300")) {
                newList.push(a[i])
            }

            // sorting items more than 400+ price range
            else if ((a[i].price > 400) && (v === "price 400+")) {
                newList.push(a[i])
            }
            
 
        }
        console.log(newList)
        this.setState({ data: newList });

        //console.log("from itemlist",v);
    }


//This filters the list based on the search
    searchClicked=(event)=>{
       
        var c = this.state.constantData;
        console.log(c);
        var d = [];
        var s = this.state.searchString;
        for(var i=0; i<c.length; i++){
            try{
            if(c[i].description.includes(s))
            {
                d.push(c[i]);
            }}
            catch{
                console.log(i);
            }
        }
        this.setState({data: d});
   

    }
//this is a hlper for searching
    searching=(event)=>{
        this.setState({searchString:event.target.value});
        console.log(this.state.searchString);
    }
   
    render(){
        return(
        <div className="container">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="add-item">

                    
             <div>
             {/* If not logged in redirects to log in page */}

                            <div>
                                {!localStorage.getItem('jwtToken') && (
                                    <div>
                                        <a href="/login">
                                        <button class="btn add-item-btn">Add Item for Sale!</button>
                                        </a>
                                    </div>)}
                            </div>

              {/* if logged it redirects to add item form  page */}
                            <div>
                                {localStorage.getItem('jwtToken') && (
                                    <div>
                                        <a href="/ItemForm">
                                        <button class="btn add-item-btn">Add Item for Sale!</button>
                                        </a>
                                    </div>)}
                            </div>
                </div>
                    
            </div> 
            <div className="search-filter-sort">
                <SearchBar searchClicked={this.searchClicked} searching={this.searching}></SearchBar>
                <Sort sortApplied={this.sort}></Sort>
            </div>
            <div className="results">
                <h5>Results: {this.state.data.length}</h5>
            </div>
            
            <div>
            <Loader loader={this.state.loader}>
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
            </Loader>
            </div>
              
        </div>
        );
    }
}

export default ItemCardList;

