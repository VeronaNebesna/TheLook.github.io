import React, { Fragment } from "react"
import PhotoListData from "./PhotoListData"
import PhotoListItems from "./PhotoListItems"

const PhotoListLeft = ({
    isOpen,
  	openImageWindow,
	indexOpenImg,
	openImage
}) =>{
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
                        isOpen={isOpen}
                        openImageWindow={openImageWindow}
                        indexOpenImg={indexOpenImg}
                        openImage={openImage}                
                    /> :null
                ))
            }
            </div>
        
        </Fragment>
    )
}

export default PhotoListLeft