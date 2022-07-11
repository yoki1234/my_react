
import React from "react";
import List2 from "./List2";
import "./listItem.css";

function ListItem1(props){
  const{
    title,
    descr,
    isActive,
    onDelete
  }=props
    return(
      <div className='app-list'>
          <div className='app-heading-name'>
            <p><label onClick={onDelete}>Delete</label></p>
            <h4>{title}</h4>
            
          </div>
          <div className='app-discription'>
            {descr}
          </div> 
          <div className='app-item-list'>
            <List2 onAction={()=>{
              console.log('Parent Clicked')}
            } isActive={isActive}/>
           
          

          </div> 
          
        </div>
    )
  }

  export default ListItem1;