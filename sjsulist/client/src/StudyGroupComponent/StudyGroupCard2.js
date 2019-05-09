import React from 'react';
import './StudyGroupCard.css'; 
//import axios from "axios";
import Time from 'react-time-format'
import { blue } from '@material-ui/core/colors';

const v = {
  id:"",
  index: '',
}
const styles = {
  card: {
    maxWidth: 1000,
    margin:20,
    
  },
  media: {
    
    width: 140,
  },
  typography:{
    size: 10,

  }
};
function StudyGroupCard2(props) {
 
  
  

return (
    <div>
       {
         
        props.value.map((user, i) => {
          v.id= props.value[i]._id;
          v.index=i;
          if(i>=props.index)
          {
      return (    
         
          <div class="card">
                    <div class="header"> 
                      {/* title  */}
                        <h3 >  {props.value[i].title}</h3>

                      {/* date  and time formatted*/}
                     <div>  <Time value={props.value[i].PostDate} format="MM-DD-YYYY hh:mm:ss" /> </div> 
                    </div>

                    <div> Owner: {props.value[i].studyGroupPostedBy}</div>

                    <div>   <p> Description: {props.value[i].description}</p>  </div>

                    <div> <p> Members: {props.value[i].members}</p>  </div>
            
           
            <div>

                    {/* Join study group shows when post by id is not same */}
                    <div>
                      {(localStorage.getItem('username') !== props.value[i].studyGroupPostedBy) && (
                        <div>
                  <button class="button-main" type="submit"  id={props.value[i]._id} value={i} onClick={ props.join} 
                  
                  
                  
                  >Join Study Group!</button>
                        </div>
                      )}
                    </div>

                    {/* delete post shows when post by id is same */}
                    <div>
                        {(localStorage.getItem('username') === props.value[i].studyGroupPostedBy) && (
                            <div>
                  <button class="button-del" type="submit" id={props.value[i]._id} value={i} onClick={props.delete}>Delete Post</button>
                            </div>
                          )}
                      </div>

              </div>
                
          </div>   
  );
                        }
        })

}
</div>
  
  )

}

export default  StudyGroupCard2;


