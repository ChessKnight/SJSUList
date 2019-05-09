import React from 'react';
import './StudyGroupCard.css'; 
import axios from "axios";

const v = {
  id:"",
  index: '',
}
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
                      {/* date */}
                        <div>  {props.value[i].PostDate} </div> 
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
                  <button class="button-del" type="submit" value={v} onClick={props.delete}>Delete Post</button>
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


