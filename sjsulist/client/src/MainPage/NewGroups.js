import React from 'react';
import StudyGroupCard2 from '../StudyGroupComponent/StudyGroupCard2';

const NewGroups =(props)=>{
    const size = props.data.length-5;
    return(
        <div>
            <StudyGroupCard2 value={props.data} index ={size}></StudyGroupCard2>

        </div>
    );
}
export default NewGroups;