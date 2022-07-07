import React from "react";
import "./Label.css"

class List2 extends React.Component{
    render(){
        const props = this.props;
        const style = props.isActive ? {background:'green'}:{background:'yellow'};
        return <span className="list-label" style={style}>Label A </span>;
    }
}
export default List2;
