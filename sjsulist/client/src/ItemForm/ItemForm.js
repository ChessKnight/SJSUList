import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { TextField } from '@material-ui/core';
import './ItemForm.css';
import Clarifai from 'clarifai';
import image2base64 from '../Tools/ImageDecoder';

const app = new Clarifai.App({
    apiKey: '8987d7299e5943c5bb94928bd2fdfe63'
   });

class ItemForm extends Component {
    
    constructor(){
        super();
        this.state={
            fileimage: "images/placeholder.jpeg",
            
        }
    }

    

    onChanger=(event)=>{
        try{
    
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
        catch(err)
        {
           
        }
    }
    predictPic(result){
        app.models.predict(Clarifai.GENERAL_MODEL, {base64: result}).then(
            function(response) {
              // do something with response
              var concepts = response['outputs'][0]['data']['concepts'];
              document.getElementById("item_category").value=concepts[0].name;
            },
            function(err) {
              // there was an error
            }
        );
    }

  render() {
    return (
        <div className="i-form">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <form action="#" method ="post">
                <div className="up-image">
                <label for="up" class="btn">Select Image</label>
                    <input type="file" onChange={this.onChanger} id="up" className="inputbutton"></input>
                    <div className="image-props">
                        <img alt="file image" src={this.state.fileimage} id="image" className="itemimg"></img>
                    </div>
                    
                </div>

                <div className="input-info">
                    {/* Name of item */}
                    <div className="i-input" >
                        <div class="input-field col s20">
                        <h6>Item:</h6>
                            <input placeholder="Calc textbook, it-84, etc." id="first_name" type="text" class="validate"></input>
                        
                        </div>
                    </div>
                
                {/* Item category */}
                    <div className="i-input">
                        <div class="input-field col s10">
                        <h6>Category:</h6>
                            <textarea placeholder="Books, calculator, computer, etc." id="item_category" class="materialize-textarea" data-length="120"></textarea>
                            
                        </div>
                    </div>

                {/* Price of item */}
                    <div className="i-input">
                        <div class="input-field col s10">
                        <h6>Price (USD):</h6>
                            <input placeholder="Everything has a price..." id="icon_telephone" type="number" class="validate"></input>
                            
                        </div>
                    </div>

                {/* Condition info */}
                <div className="i-input">
                        <div class="input-field col s10">
                        <h6>Condition:</h6>
                            <input placeholder="New, used, if other:please explain." id="icon_prefix" type="text" class="validate"></input>
                            
                        </div>
                    </div>
                    
                    {/* Contact info */}
                    <div className="i-input">
                        <div class="input-field col s10">
                        <h6>Contact info:</h6>
                            <input placeholder="Provide an email, you wish to be contacted." id="icon_prefix" type="text" class="validate"></input>
                            
                        </div>
                    </div>
                </div>
                        
                <button class="btn waves-effect waves-light submit-button" type="submit" name="action">Put For Sale!
                    <i class="material-icons right">attach_money</i>
                </button>


                    

                

            </form>
        </div>
    )
  }
}

export default ItemForm;
