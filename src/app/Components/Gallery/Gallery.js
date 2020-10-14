import React, {Fragment} from "react"
import img from "./7.jpg"
import img2 from "./1.jpg"
import arrow from "./arrow-right-black.png"
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import "./Gallery.css"
const Gallery = () =>{
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
    };
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="gallery_title">
                            <p>About The Gallery</p>
                        </div>
                    </div>
                </div>
                <div className ="row gallery_row">
                   <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                       <div classname="about_gallery">
                         
                           <div className="img_gallery">
                                <img src={img}/>
                           </div>
                           <div className="desc_gallery_img">
                                <p >Now @ The Look</p>
                                <span>Artist: John Doe</span>
                                <button className="btn_view">View gallery
                                    <img src={arrow}/>
                                </button>
                           </div>
                       </div>
                        <div className="numbers">
                            <div className="num_title">
                                <p>Numbers</p>
                            </div>
                            <div className="num_item">
                                <p>130+</p>
                                <p>Photography Exibitions</p>
                            </div>
                            <div className="num_item">
                                <p>150 000+</p>
                                <p>Visitors</p>
                            </div>
                            <div className="num_item">
                                <p>1395</p>
                                <p>Days</p>
                            </div>
                            <div className="num_item">
                                <p>86+</p>
                                <p>Artists</p>
                            </div>

                        </div>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="text_gallery">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis augue, sit amet porta urna justo vel neque. Pellentesque a interdum nunc. Nunc congue eget nisl et laoreet. Vivamus suscipit vulputate enim a pellentesque. Vivamus id mattis orci. Donec ut dignissim dolor. Maecenas tortor ex, fauci-bus ac mauris a, pellentesque tincidunt turpis.</p>
                            <p>Phasellus eget nibh nec nibh porta semper a nec turpis. Interdum et malesua-da fames ac ante ipsum primis in faucibus. Maecenas rhoncus metus eu enim posuere, tincidunt porta ex interdum. Nam id lectus dui. Cras feugiat purus condimentum, condimentum urna imperdiet, vehicula nisi.</p>
                            <div className="our_vision">
                                <p className="vision_title">Our Vision</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis. Sed sagittis, turpis a imperdiet eleifend, est ligula convallis augue, sit amet porta urna justo vel neque. Pellentesque a interdum nunc.</p>
                                <p className="quote">“It is good to love many things, for therein lies the true strength, and who-soever loves much performs much, and can accomplish much, and what is done in love is well done.”</p>
                                <span>Vincent Van Gogh</span>
                            </div>
                        </div>
                        <div className="img_gallery">
                            <p className="soon">Soon @ The Look</p>
                             <img src={img2}/>
                            <p className="description_photo">Red Sunset</p>
                            <p className="artist">Artist: John Doe</p>
                            <p className="artist">February 3, 2019–July 28, 2019</p>
                        </div>
                        
                   </div>
                </div>
                <div className="row exhibitions_row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                       <div className="exhibitions">
                           <p className="title_exhibition">All Past Exhibitions</p>
                       </div>
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
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Gallery