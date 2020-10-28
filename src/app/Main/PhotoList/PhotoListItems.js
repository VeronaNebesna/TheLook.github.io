import React, {Fragment,Component } from "react"
import arrow from "./arrow-right-black.png"
import {Link} from "react-router-dom"
import PhotoListData from "./PhotoListData"
import "./PhotoList.css"



const PhotoListItems = ({
    img, 
    id, 
    description,
    artist,
})=>{
    return(
        <Fragment>
            <div className="photo_list_items" key={id} >
                <img src={img}/>
                <p className="description_photo">{description}</p>
                <p className="artist">Artist: {artist}</p>
                <button className="btn_view"><Link to="/gallery_view">View gallery</Link>
                    <img src={arrow}/>
                </button>
            </div>
        </Fragment>
    )
}

export default PhotoListItems