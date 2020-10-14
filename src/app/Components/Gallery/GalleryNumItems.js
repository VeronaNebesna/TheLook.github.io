import React, { Fragment } from "react"
import CountUp from 'react-countup'

const GalleryNumItems = ({
    id,
    count,
    p
})=>{
    return(
        <Fragment>
            <div className="num_item" key={id}>
                <p><CountUp
                    start="0"
                    end={count}
                    duration={10}
                    />+</p>
                <p>{p}</p>
            </div>
        </Fragment>
    )
}
export default GalleryNumItems