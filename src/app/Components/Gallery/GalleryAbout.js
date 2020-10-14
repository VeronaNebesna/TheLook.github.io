import React, { Fragment } from "react"
import arrow from "./arrow-right-black.png"
import img from "./7.jpg"


const GalleryAbout = () =>{
    return(
        <Fragment>
            <div classname="about_gallery">       
                <div className="img_gallery">
                    <img src={img}/>
                </div>
                <div className="desc_gallery_img">
                    <p >Now @ The Look</p>
                    <span>Artist: John Doe</span>
                    <button className="btn_view">View gallery
                        <img src={arrow}/>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default GalleryAbout 