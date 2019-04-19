import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class ItemForm extends Component {

  render() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <form action="#">

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
                        <input placeholder="Item" id="first_name" type="text" class="validate"></input>
                       
                    </div>
                </div>
            
            {/* Item Description */}
                <div class="row">
                    <div class="input-field col s10">
                        <i class="material-icons prefix"> description</i>
                        <textarea placeholder="Description" id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                        
                    </div>
                </div>

            {/* Price of item */}
                <div class="row">
                    <div class="input-field col s10">
                        <i class="material-icons prefix">attach_money</i>
                        <input placeholder="Price" id="icon_telephone" type="number" class="validate"></input>
                        
                    </div>
                </div>

                
                {/* Contact info */}
                <div class="row">
                    <div class="input-field col s10">
                        <i class="material-icons prefix">account_circle</i>
                        <input placeholder="Name" id="icon_prefix" type="text" class="validate"></input>
                        
                    </div>
        
                    <div class="input-field col s10">
                        <i class="material-icons prefix">phone</i>
                        <input placeholder="Phone" id="icon_telephone" type="tel" class="validate"></input>
                        
                    </div>

                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                     <i class="material-icons right">send</i>
                    </button>


                </div>

                

            </form>
        </div>
    )
  }
}

export default ItemForm;
