import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { TextField } from '@material-ui/core';

import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '8987d7299e5943c5bb94928bd2fdfe63'
   });
   const image2base64 = require('image-to-base64');

class ItemForm extends Component {
    
    constructor(){
        super();
        this.state={
            fileimage: "images/placeholder.jpeg",
            
        }
    }

    

    onChanger=(event)=>{
       var output = document.getElementById("image");
       output.src= URL.createObjectURL(event.target.files[0]);

       image2base64(output.src) // you can also to use url
        .then(
            (response) => {
           
                this.predictPic(response);
              
            }
        )
        .catch(
            (error) => {
                console.log(error); //Exepection error....
            }
        )
    }

    predictPic(result){
        app.models.predict(Clarifai.GENERAL_MODEL, {base64: result}).then(
            function(response) {
              // do something with response
              var concepts = response['outputs'][0]['data']['concepts'];
              console.log(concepts[0].name);
              document.getElementById("item_category").value=concepts[0].name;
            },
            function(err) {
              // there was an error
            }
        );
    }

  render() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <form action="#" method ="post">
                <div>
                <label for="up" class="btn">Select Image</label>
                    <input type="file" onChange={this.onChanger} id="up" className="inputbutton"></input>
                    <img alt="file image" src={this.state.fileimage} id="image" className="itemimg"></img>
                </div>

                {/* Name of item */}
                <div class="row">
                    <div class="input-field col s10">
                    <i class="material-icons prefix"> description</i>
                        <input placeholder="Item" id="first_name" type="text" class="validate"></input>
                       
                    </div>
                </div>
            
            {/* Item category */}
                <div class="row">
                    <div class="input-field col s10">
                        <i class="material-icons prefix"> description</i>
                        <textarea placeholder="Category" id="item_category" class="materialize-textarea" data-length="120"></textarea>
                        
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
