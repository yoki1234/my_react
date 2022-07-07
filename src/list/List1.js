import React from "react"

import ListItem1 from "./ListItem1";

const obj = {
    title: "Appointment for July",
    descr : "The patient is rescheduled to july",
    isActive: true
};
class List1 extends React.Component{
    render(){
        return(
            <div className='app-main'>  
               <ListItem1 title ={obj.title} descr={obj.descr} isActive={obj.isActive}/>
             </div>
            )
    }

}

export default List1;
