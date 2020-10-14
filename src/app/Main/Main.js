import React, { Fragment } from "react"
import PhotoListLeft from "./PhotoList/PhotoListLeft"
import PhotoListRight from "./PhotoList/PhotoListRight"
import BlogList from "./Blog/BlogList"
import Title from "./PhotoList/Title"
import "./Main.css"
import {Route} from "react-router-dom"
import Gallery from "../Components/Gallery/Gallery"


  const scrollToTop = ()=>{
     window.scrollTo({
         top:0,
         behavior:"smooth"
     })   
    }
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
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <Route path="/" exact render={()=><PhotoListRight/>}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_darker">
                <div className="container">
                    <div className="row blog_row">
                    <Route path="/" exact component={BlogList}/>
                    </div>
                </div>
            </section>
            <div className="arrow_up" onClick={()=> scrollToTop()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
        </Fragment>
    )
}

export default Main