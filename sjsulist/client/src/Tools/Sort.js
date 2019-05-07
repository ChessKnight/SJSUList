import React, { Component } from 'react';
import './Sort.css';



class Sort extends Component{
    constructor(){
        super();
        this.state={
            current: 'Most Recent',

        }

    }
    sortBtnClicked=(event)=>{
        var c= event.target.value;
        console.log(c);
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
                            <li><button  className="topbtn dropitem" value="Most Recent" onClick={this.sortBtnClicked}>Most Recent</button></li>
                            <li><button className="topbtn dropitem" value='Price($-$$)' onClick={this.sortBtnClicked}>Price($-$$)</button></li>
                            <li><button className="topbtn dropitem" value="Price($$-$)" onClick={this.sortBtnClicked}>Price($$-$)</button></li>
                    </lu>
                </li>
            </ul>
            
                    
            </div>
        );
    }
}

export default Sort;