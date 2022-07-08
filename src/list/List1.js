import React from "react"

import ListItem1 from "./ListItem1";
import Tools from "./Tools";

const arr = [
    {
        title: "Appointment for July",
        descr : "The patient is rescheduled to july",
        isActive: false
    },
    {
        title: "Appointment for October",
        descr : "The patient is rescheduled to October",
        isActive: true
    },
    {
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
    onListChange(evt){
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
    render(){
        return(
            <Tools onAction={this.onListChange.bind(this)}>
                <div className='app-main'>  
                {
                this.state.data.map((obj)=>{
                    return <ListItem1  key = {obj.title} title ={obj.title} descr={obj.descr} isActive={obj.isActive}/>
                })
                }
                
                </div>
             </Tools>
            )
    }

}

export default List1;
