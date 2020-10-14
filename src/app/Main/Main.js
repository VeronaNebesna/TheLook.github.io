import React, { Fragment } from "react"
import PhotoListLeft from "./PhotoList/PhotoListLeft"
import PhotoListRight from "./PhotoList/PhotoListRight"
import BlogList from "./Blog/BlogList"
import Title from "./PhotoList/Title"
import Arrow_up from "./Arrow_up/Arrow_up"
import {Route} from "react-router-dom"
import Gallery from "../Components/Gallery/Gallery"
import "./Main.css"


const Main = () =>{
    return(
        <Fragment>
             <Route path ="/gallery" exact component={Gallery}/>
            <section className="section">
                <div className="container">
                    <div className ="row section_row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                             <Route path="/" exact component={Title} />
                             <Route path="/" exact component={PhotoListLeft}/> 
                        </div>
                        <Route path="/" exact render={()=><PhotoListRight/>}/>
                    </div>
                </div>
            </section>
            <Route path="/" exact component={BlogList}/>
            <Arrow_up/>
        </Fragment>
    )
}

export default Main