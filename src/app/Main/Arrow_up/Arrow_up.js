import React, { Fragment } from "react"


const scrollToTop = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })   
   }
const Arrow_up = () =>{
    return(
        <Fragment>
            <div className="arrow_up" onClick={()=> scrollToTop()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Fragment>
    )
}

export default Arrow_up