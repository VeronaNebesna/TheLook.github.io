import React, {Fragment} from "react"
import arrow from "./arrow-right-black.png"
import "./PhotoList.css"
const PhotoListItems = ({
    img, 
    id, 
    description,
    artist
}) =>{
    return(
        <Fragment>
            <div className="photo_list_items" key={id}>
                <img src={img}/>
                <p className="description_photo">{description}</p>
                <p className="artist">Artist: {artist}</p>
                <button className="btn_view">View gallery
                    <img src={arrow}/>
                </button>
            </div>
        </Fragment>
    )
}

export default PhotoListItems