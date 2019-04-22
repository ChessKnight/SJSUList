import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class ItemForm extends Component {

  render() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <form action="http://localhost:3000/itemlist" method="post">

                {/* Image Upload */}
                <div class="file-field input-field s4">

                    <div class="btn">
                        <span>File</span>
                        <input type="file"></input>
                    </div>

                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text"></input>
                    </div>

                </div>

                {/* Name of item */}
                <div class="row">
                    <div class="input-field col s10">
                    <i class="material-icons prefix"> description</i>
                        <input placeholder="Item" name="itemName" type="text" class="validate"></input>
                       
                    </div>
                </div>
            
            {/* Item Description */}
                <div class="row">
                    <div class="input-field col s10">
                        <i class="material-icons prefix"> description</i>
                        <textarea placeholder="Description" name="description" class="materialize-textarea" data-length="120"></textarea>
                        
                    </div>
                </div>

            {/* Price of item */}
                <div class="row">
                    <div class="input-field col s10">
                        <i class="material-icons prefix">attach_money</i>
                        <input placeholder="Price" name="price" type="number" class="validate"></input>
                        
                    </div>
                </div>

                
                {/* Contact info */}
                <div class="row">
                    <div class="input-field col s10">
                        <i class="material-icons prefix">account_circle</i>
                        <input placeholder="Name" name="name" type="text" class="validate"></input>
                        
                    </div>
        
                    <div class="input-field col s10">
                        <i class="material-icons prefix">phone</i>
                        <input placeholder="Phone" name="contact" type="tel" class="validate"></input>
                        
                    </div>

                    <button class="btn waves-effect waves-light" type="submit" >Submit
                     <i class="material-icons right">send</i>
                    </button>


                </div>

                

            </form>
        </div>
    )
  }
}

export default ItemForm;
