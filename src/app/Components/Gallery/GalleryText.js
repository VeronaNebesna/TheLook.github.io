import React, { Fragment } from "react"
import img2 from "./1.jpg"

const GalleryText = () =>{
    return(
        <Fragment>
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
        </Fragment>
    )
}

export default GalleryText