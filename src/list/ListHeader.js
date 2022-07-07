import React from "react"
import "./ListHeader.css"

function listHeader(){
    return(
    <div className='app-header'>
      <span className='header-title'>I am learning react</span>
      <div className="app-menu">
        <span>Menu</span>
        <span>Usage</span>
        <span>Packages</span>
        <span>Tools</span>
        <span>LogIn</span>
      </div>
    </div>
    )
}
export default listHeader;
