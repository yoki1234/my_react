import React from "react"

import ListItem1 from "./ListItem1";
import Tools from "./Tools";

const arr = [
    {   
        id :1,
        title: "Appointment for July",
        descr : "The patient is rescheduled to july",
        isActive: false
    },
    {   
        id:2,
        title: "Appointment for October",
        descr : "The patient is rescheduled to October",
        isActive: true
    },
    {
        id:3,
        title: "Appointment for November",
        descr : "The patient is rescheduled to November",
        isActive: false
    },
    {
        title: "Appointment for June",
        descr : "The patient is rescheduled to June",
        isActive: true
    }

];
class List1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:arr    
        };
    }
    onListChange=(evt)=>{
        console.log(evt.target.value);
        const value = evt.target.value;
        const newList = arr.filter((item)=>{
            if(value === 'all'){
                return true;
            }
            if (value === 'active'){
                return item.isActive === true;
            }
            if (value === 'non-active'){
                return item.isActive === false;
            }
            return false;

        });
        console.log(newList);
        this.setState({
            data:newList
        });
    }
    handleDelete=(item)=>{
        console.log('Delete', item);
        const newList = this.state.data.filter((element)=>element.id !== item.id);

        this.setState({
            data:newList

        });
    }
    render(){
        console.log("RENDER");
        return(
            <Tools onAction={this.onListChange}>
                <div className='app-main'>  
                {
                this.state.data.map((obj)=>{
                    return <ListItem1  
                        key = {obj.title} 
                        title ={obj.title} 
                        descr={obj.descr} 
                        isActive={obj.isActive}
                        onDelete={()=>{
                            this.handleDelete(obj);
                        }}
                    />
                })
                }
                
                </div>
             </Tools>
            )
    }

}

export default List1;
