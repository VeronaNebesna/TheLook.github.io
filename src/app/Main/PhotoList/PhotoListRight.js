import React, { Fragment } from "react"
import PhotoListItems from "./PhotoListItems"
import PhotoListData from "./PhotoListData"
import arrow from "./arrow-right-black.png"

const PhotoListRight = () =>{
    return(
        <Fragment>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
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
                        /> : null))
                }
                </div>
                <button className="btn_see_all">see all galleries
                    <img src={arrow}/>
                </button>
        </div>
        </Fragment>
    )
}

export default PhotoListRight