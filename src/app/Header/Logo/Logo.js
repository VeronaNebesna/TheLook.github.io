import React, {Fragment} from "react"
import "./Logo.css"
import logo from "./logo.png"

const Logo = () =>{
    return(
      <Fragment>
          <div className="logo">
              <img src={logo}/>
          </div>
      </Fragment>
    )
}

export default Logo