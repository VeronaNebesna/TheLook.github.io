import React, {Fragment} from "react"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import Slider from "./Slider/Slider"
import {Route} from "react-router-dom"
import "./Header.css"

const Header = () =>{
    return(
      <Fragment>
          <header className="header-border">
              <div className="container">
                  <div className="row header_row">
                      <div className="col-xs-7 col-sm-4 col-md-5 col-lg-6">
                        <Logo/>
                      </div>
                    <div className="col-xs-5 col-sm-8 col-md-7 col-lg-6">
                        <Menu/>
                    </div>
                  </div>
              </div>
          </header>
          <Route path ="/" exact component={Slider}/>
       
      </Fragment>
    )
}

export default Header