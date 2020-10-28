import React, { Fragment } from "react"

const ArtistsListItem =({
    id,
    desc, 
    img,
    autor,
    span
})=>{
    return(
        <Fragment>
            <div className="artists_list" key={id}>
                <div className="artists_list_item">
                    <div className="artists_list_img">
                        <img src={img}/>
                    </div>
                    <div className="artists_list_autor">
                        <p>{autor}</p>
                    </div>
                    <div className="artists_list_span">
                        <p>{span}</p>
                    </div>
                    <div className="artists_list_desc">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ArtistsListItem