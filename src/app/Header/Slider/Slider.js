import React, {Fragment} from "react"
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import "./Slider.css"

const Slider =()=>{
    return(
        <Fragment>
            
                <AliceCarousel animationDuration = "1500" autoPlayInterval="3000" infinite="true" disableDotsControls="true" mouseTracking="true" autoPlay="true" >
                    <div className="slider_box">
                        <div className="slider_description">
                            <p>
                                The Look <br/>Gallery
                            </p>
                            <span>
                                John Doe Showcase
                            </span>
                            <span>23 January - 14 February</span>
                        </div>
                            <div className="img_slider_first">
                                <div className="overlay"></div>
                            </div >
                    </div>
                    <div className="slider_box">
                        <div className="slider_description">
                            <p>
                                The Look <br/>Gallery
                            </p>
                            <span>
                                John Doe Showcase
                            </span>
                            <span>23 January - 14 February</span>
                            <p className="btn_read_more">Read more <i class="fas fa-long-arrow-alt-right"></i></p>
                        </div>
                        <div className="img_slider_second">
                            <div className="overlay"></div>
                        </div >
                    </div>
                    <div className="slider_box">
                        <div className="slider_description">
                            <p>
                                The Look <br/>Gallery
                            </p>
                            <span>
                                John Doe Showcase
                            </span>
                            <span>23 January - 14 February</span>
                        </div>
                        <div className="img_slider_third">
                            <div className="overlay"></div>
                        </div >
                    </div>
            </AliceCarousel>

           
            
        </Fragment>
    )
}

export default Slider