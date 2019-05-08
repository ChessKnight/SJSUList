import React from 'react';
import ItemCard from '../ItemCardlistComponent/ItemCard';
import Scroll from '../Container/Scroll';

const Store =(props)=>{
    if(props.items.length===0){
        return(
            <div>
                <h6>
                    You have no items for sale.
                </h6>
            </div>
        );
    }
    else{
        return(
            <Scroll>
                {props.items.map((user, i)=>{
                    return(
                        <ItemCard image= {props.items[i].imageSrc} body={props.items[i]._id} description={props.items[i].description}
                            price={props.items[i].price} contact={props.items[i].contact}
                            name = {props.items[i].name} condition={props.items[i].condition}
                        />
                    );

                })}
            </Scroll>
        );
    }
}

export default Store;