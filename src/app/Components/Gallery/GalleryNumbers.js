import React, { Fragment } from "react"
import GalleryNumData from "./GalleryNumData"
import GalleryNumItems from "./GalleryNumItems"


const GalleryNumbers = ()=>{
    return(
        <Fragment>

             <div className="numbers">
                <div className="num_title">
                    <p>Numbers</p>
                </div>
                {
                    GalleryNumData.map(({
                        id,
                        count,
                        p
                    })=>(
                        <GalleryNumItems
                            id={id}
                            count={count}
                            p={p}
                        />
                     ) )

                }
            </div>
        </Fragment>
    )

}

export default GalleryNumbers