import React, { Component } from 'react';
import './Sort.css';



class Sort extends Component{
    constructor(){
        super();
        this.state={
            current: 'Select Price Range',

        }

    }
    sortBtnClicked=(event)=>{

         
        var c= event.target.value;
       // console.log('from sort.js', c);
        this.setState({current: c});
        this.props.sortApplied(event.target.value);

    }

    render(){
        return(
            <div >
            
            <ul className="sort">
                <li className="drop"><button className="topbtn">Sort: {this.state.current}</button></li>
                <li>
                    <lu>
                            <li><button className="topbtn dropitem" value='price<100' onClick={this.sortBtnClicked}>Price(less than 100)</button></li>
                            <li><button className="topbtn dropitem" value="price 100-200" onClick={this.sortBtnClicked}>Price 100-200</button></li>
                            <li><button className="topbtn dropitem" value="price 200-300" onClick={this.sortBtnClicked}>Price 200-300</button></li>
                            <li><button className="topbtn dropitem" value="price 300-400" onClick={this.sortBtnClicked}>Price 300-400</button></li>
                            <li><button className="topbtn dropitem" value="price 400+" onClick={this.sortBtnClicked}>Price(more than 400)</button></li>
                    </lu>
                </li>
            </ul>
            
                    
            </div>
        );
    }
}

export default Sort;