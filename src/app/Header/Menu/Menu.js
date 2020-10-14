import React, { Fragment, Component } from "react"
import {Link} from "react-router-dom"
import "./Menu.css"

class Menu extends Component {
    state={
        isOpenMenu: false
    }
    clickOpenMenu = () =>{
        this.setState( (prevState)=>({
            isOpenMenu: !prevState.isOpenMenu
        }))
    }
    render(){
        let openMenu;
        if(this.state.isOpenMenu){
            openMenu = "menu open"
        }else{
            openMenu = "menu"
        }
        return(
        <Fragment>
                <ul className={openMenu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><a href="">Artists</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            <div className="navigation" onClick={()=>this.clickOpenMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </Fragment>
    )
    }
}

export default Menu