import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { TextField } from '@material-ui/core';
import './ItemForm.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '8987d7299e5943c5bb94928bd2fdfe63'
   });


class ItemForm extends Component {
    
    constructor(){
        super();
        this.state={
            fileimage: "images/placeholdimage.jpg",
            prediction: ""
        }
    }

    onChanger=(event)=>{
       var output = document.getElementById("image");
      
       output.src= URL.createObjectURL(event.target.files[0]);
       console.log(output.src);


       app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict("https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F833455%252F5fc3da8c-5dd0-4d02-864f-746289abe608.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=W0S4XoEi34AvAiGapJVi5F9eH20=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com");
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts'];
        this.setState({prediction: concepts[0].name});
      })

      console.log(output.baseURI);

      app.models.predict(Clarifai.GENERAL_MODEL, {base64: output.baseURI}).then(
        function(response) {
          // do something with response
          console.log(response);
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
                        <input placeholder="Item" id="first_name" type="text" class="validate" value={this.state.prediction}></input>
                       
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
