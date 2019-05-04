import React from 'react';

const GroupList = (props)=>{

    if(true){
        return(
            <div>
                <h6>You have no groups.</h6>
            </div>
        );
    }
    else{
        return(
            <div>
                <h6>Random group.</h6>
                <button>Leave Group</button>
            </div>
        );
    }

}

export default GroupList;