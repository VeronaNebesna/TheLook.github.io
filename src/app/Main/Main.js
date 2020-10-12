import React, { Fragment } from "react"
import PhotoListLeft from "./PhotoList/PhotoListLeft"
import PhotoListRight from "./PhotoList/PhotoListRight"
import "./Main.css"

const Main = () =>{
    return(
        <Fragment>
            <section className="section">
                <div className="container">
                    <div className ="row section_row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="description">
                                <div className="description_title">
                                    <p>“The camera makes you forget you’re there. It’s not like you are hiding but you forget, you are just looking so much.”</p>
                                </div>
                                <div className="description_subtitle">
                                    <p>
                                    Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti.
                                    </p>
                                </div>
                            </div>
                           
                                <PhotoListLeft/>
        
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <PhotoListRight/>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Main