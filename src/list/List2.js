import React from "react";
import "./Label.css"

class List2 extends React.Component{
    render(){
        const props = this.props;
        const style = props.isActive ? {background:'green'}:{background:'orange'};
        return <span onClick={()=>{
        props.onAction();
        }} className="list-label" style={style}>{props.isActive ? "Active":"notActive"} </span>;
    }
}
export default List2;
