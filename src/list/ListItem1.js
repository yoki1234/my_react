
import React from "react";
import List2 from "./List2";
import "./listItem.css";

function ListItem1(props){
  console.log("heyyy",props);
    return(
      <div className='app-list'>
          <hr/>
          <div className='app-heading-name'>
            <h4>{props.title}</h4>
          </div>
          <div className='app-discription'>
            {props.descr}
          </div> 
          <div className='app-item-list'>
            <List2 isActive={props.isActive}/>
           
          

          </div> 
          <hr />
        </div>
    )
  }

  export default ListItem1;