import React from 'react';
import StudyGroupCard2 from '../StudyGroupComponent/StudyGroupCard2';
import Scroll from '../Container/Scroll';
//import { checkPropTypes } from 'prop-types';

const GroupList = (props)=>{

    if(props.studygroups.length ===0){
        return(
            <div>
                <h6>You have no groups.</h6>
            </div>
        );
    }
    else{
        return(
            <Scroll>
                <StudyGroupCard2 value={props.studygroups} index="0" delete={props.delete}></StudyGroupCard2>
            </Scroll>
        );
    }

}

export default GroupList;