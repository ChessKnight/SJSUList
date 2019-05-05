import React from 'react';
import ItemCard from '../ItemCardlistComponent/ItemCard';
import './MainPageContent.css';


const NewItems =(props)=>{


    return(
        
        <div className="newItems">
            {props.data.map((user, i)=>{
                        var dataIndex = props.data.length-i;

                        if(props.data.length-i<9){
                        return(
                            
                            <div className="newItems">
                                <ItemCard image= {props.data[i].imageSrc} body={props.data[i]._id} description={props.data[i].description}
                                price={props.data[i].price} contact={props.data[i].contact}
                                name = {props.data[i].name} condition={props.data[i].condition}
                                />
                            </div>
                        );
                        }else{
                            return;
                        }
                        })
                    }
        </div>
    );
}

export default NewItems;