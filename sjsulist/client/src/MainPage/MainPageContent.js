import React, { Component } from 'react';
import Container from '../Container/Container';
//import ItemCard from '../ItemCardlistComponent/ItemCard';
import './MainPageContent.css';
import NewItems from './NewItems';
import Scroll from '../Container/Scroll';
import Welcome from './Welcome';
import NewGroups from './NewGroups';

class MainPageContent extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            dataGroup: [],
        }
    }
    componentDidMount(){
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data=> this.setState({data}));

        fetch('http://localhost:5000/getstudygroup')
    .then(response => response.json())
    .then(data=> {this.setState({dataGroup: data})});
    }
    render(){
        return(
            <div className="contentSetUp">
                <Welcome></Welcome>
                <div className="feed">
                    <Container value="New Items for Sale!">
                        <Scroll>
                            <NewItems data={this.state.data}></NewItems>
                        </Scroll>
                    </Container>
                    <Container value="New Groups!">
                        <Scroll>
                            <NewGroups data = {this.state.dataGroup}></NewGroups>
                        </Scroll>
                    </Container>
                </div>
            </div>
        );
    }
}

export default MainPageContent;