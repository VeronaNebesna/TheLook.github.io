import React, {Fragment} from "react"
import ArtistsListItem from "./ArtistsListItem"
import ArtistsData from "./ArtistsData"
import "./Artists.css"

const Artist = ()=>{
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="gallery_title">
                            <p>Artists</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis. Sed sagittis.</span>
                        </div>
                    </div>
                </div>
                <div className="row artists_row">
                    {
                        ArtistsData.map(({
                            id,
                            desc, 
                            img,
                            autor,
                            span
                        })=>(
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={id}>
                                <ArtistsListItem
                                    id={id}
                                    desc={desc}
                                    img={img}
                                    autor={autor}
                                    span={span}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Artist