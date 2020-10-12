import React, { Fragment } from "react"
import PhotoListItems from "./PhotoListItems"
import PhotoListData from "./PhotoListData"
const PhotoListRight = () =>{
    return(
        <Fragment>
            <div className="photo_list">
            {
                PhotoListData.map(({
                    id,
                    img,
                    description,
                    artist
                })=>(id>3 ? 
                    <PhotoListItems
                        id={id}
                        img={img}
                        description={description}
                        artist={artist}                
                    /> : null
                ))
            }
            </div>
        
        </Fragment>
    )
}

export default PhotoListRight