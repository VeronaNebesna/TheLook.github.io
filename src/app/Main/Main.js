import React, { Fragment } from "react";
import {Route} from "react-router-dom";
import Gallery from "react-photo-gallery";
import PhotoListLeft from "./PhotoList/PhotoListLeft";
import PhotoListRight from "./PhotoList/PhotoListRight";
import BlogList from "./Blog/BlogList";
import Title from "./PhotoList/Title";
import Arrow_up from "./Arrow_up/Arrow_up";
import {photos} from "./photos";
import ScrollToTopOnMount from "./ScrollToTopMount";
import GalleryLink from "../Components/Gallery/GalleryLink";
import "./Main.css";



const Main = () =>{
    return(
        <Fragment>
            <ScrollToTopOnMount/>
             <Route path ="/gallery" exact component={GalleryLink}/>
             <Route path ="/gallery_view" exact render={()=>(
                   <Gallery photos={photos} direction={"column"}/>
             )}/>

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