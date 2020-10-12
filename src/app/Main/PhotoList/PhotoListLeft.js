import React, { Fragment } from "react"
import PhotoListData from "./PhotoListData"
import PhotoListItems from "./PhotoListItems"

const PhotoListLeft = () =>{
    return(
        <Fragment>
            <div className="photo_list">
            {
                PhotoListData.map(({
                    id,
                    img,
                    description,
                    artist
                })=>(id<=3 ?
                    <PhotoListItems
                        id={id}
                        img={img}
                        description={description}
                        artist={artist}                
                    /> :null
                ))
            }
            </div>
        
        </Fragment>
    )
}

export default PhotoListLeft