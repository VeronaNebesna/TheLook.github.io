import React, { Fragment } from "react"
import PhotoListItems from "./PhotoListItems"
import Title from "./Title"
import {Link} from "react-router-dom"
import arrow from "./arrow-right-black.png"
const PhotoList = ({
    isOpen,
  	openImageWindow,
	indexOpenImg,
    openImage,
    images
}) =>{
    return(
        <Fragment>
             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                 <Title/>
             </div>
            {
                images.map(({
                    id,
                    image,
                    description,
                    artist
                })=>(
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <PhotoListItems
                            id={id}
                            img={image}
                            description={description}
                            artist={artist}
                            isOpen={isOpen}
                            openImageWindow={openImageWindow}
                            indexOpenImg={indexOpenImg}
                            openImage={openImage}                
                        />
                    </div>
                ))
            }
            <button className="btn_see_all"><Link to="/gallery_view">see all galleries</Link>
                <img src={arrow}/>
            </button>
        </Fragment>
    )
}

export default PhotoList