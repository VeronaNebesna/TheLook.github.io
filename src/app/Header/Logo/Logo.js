import React, {Fragment} from "react"
import {Link} from "react-router-dom"
import "./Logo.css"
import logo from "./logo.png"

const Logo = () =>{
    return(
        <Fragment>
            <div className="logo">
               <Link to="/"><img src={logo}/></Link>
            </div>
        </Fragment>
    )
}

export default Logo