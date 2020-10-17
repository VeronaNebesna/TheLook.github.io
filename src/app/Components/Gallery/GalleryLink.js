import React, {Fragment} from "react"
import {useEffect} from "react"
import GalleryText from "./GalleryText"
import GalleryAbout from "./GalleryAbout"
import GallerySlider from "./GallerySlider"
import GalleryNumbers from "./GalleryNumbers"
import "./Gallery.css"


const Gallery = () =>{
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="gallery_title">
                            <p>About The Gallery</p>
                        </div>
                    </div>
                </div>
                <div className ="row gallery_row">
                   <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <GalleryAbout/>
                        <GalleryNumbers/>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                     <GalleryText/>
                   </div>
                </div>
                <div className="row exhibitions_row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                       <div className="exhibitions">
                           <p className="title_exhibition">All Past Exhibitions</p>
                       </div>
                    <GallerySlider/>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Gallery