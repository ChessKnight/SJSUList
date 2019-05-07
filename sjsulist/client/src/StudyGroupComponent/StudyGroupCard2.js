import React from 'react';
import './StudyGroupCard.css'; 
import axios from "axios";


function StudyGroupCard2(props) {
 
  
  

return (
    <div>
       {
         
        props.value.map((user, i) => {

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
                  <button class="button-main" type="submit" onClick={( ) => {
                    
                    
                    const studygroupid = props.value[i]._id
                    console.log(studygroupid)
                     
                    let updatStudyGroup =  function update(){
                      props.value[i].members = props.value[i].members.push(localStorage.getItem('username'))
                    }
                    
                     
                    axios.put(`http://localhost:5000/updatestudygroup/${studygroupid}`,  updatStudyGroup )
                      .then(res => res.data)
                     
                      }
                  
                  
                  
                  }>Join Study Group!</button>
                        </div>
                      )}
                    </div>

                    {/* delete post shows when post by id is same */}
                    <div>
                        {(localStorage.getItem('username') === props.value[i].studyGroupPostedBy) && (
                            <div>
                            <button class="button-del">Delete Post</button>
                            </div>
                          )}
                      </div>

              </div>
                
          </div>   
  );
   
        })

}
</div>
  
  )

}

export default  StudyGroupCard2;


