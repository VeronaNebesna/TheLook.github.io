import React, { Fragment } from "react"
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"


const GallerySlider = () =>{
    
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
};
    return(
    <Fragment>
        <AliceCarousel responsive={responsive} infinite="true" autoPlayInterval="1500" disableButtonsControls="true" mouseTracking="true" autoPlay="true">
            <div className="item_of_slider_gallary">
                <div className="slider_item_gallery_1">
                    <div className="descr_photo_gallery">
                        <p className="name_photo">Winter</p>
                        <p className="artist">Artist: John Doe</p>
                        <p className="artist">February 3, 2019–July 28, 2019</p>
                    </div>
                </div>
            </div>
            <div className="item_of_slider_gallary">
                <div className="slider_item_gallery_2">
                    <div className="descr_photo_gallery">
                        <p className="name_photo">Portrets</p>
                        <p className="artist">Artist: John Doe</p>
                        <p className="artist">July 12, 2018– September 3, 2018</p>
                    </div>
                </div>
            </div>
            <div className="item_of_slider_gallary">
                <div className="slider_item_gallery_3">
                    <div className="descr_photo_gallery">
                        <p className="name_photo">Deep Blue</p>
                        <p className="artist">Artist: John Doe</p>
                        <p className="artist">June 3, 2018–September 16, 2019</p>
                    </div>
                </div>
            </div>
        </AliceCarousel>
    </Fragment>
    )

}

export default GallerySlider