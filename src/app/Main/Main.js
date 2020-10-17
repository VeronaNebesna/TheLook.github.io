import React, { Fragment,useState, useCallback  } from "react";
import {Route} from "react-router-dom";
import Gallery from "react-photo-gallery";
import PhotoListLeft from "./PhotoList/PhotoListLeft";
import PhotoListRight from "./PhotoList/PhotoListRight";
import BlogList from "./Blog/BlogList";
import Title from "./PhotoList/Title";
import Arrow_up from "./Arrow_up/Arrow_up";
import {photos} from "./photos";
import ScrollToTopOnMount from "./ScrollToTopMount";
import GalleryLink from "../Components/Gallery/GalleryLink";
import "./Main.css";
import Carousel, { Modal, ModalGateway } from "react-images";




const Main = () =>{
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    return(
        <Fragment>
            <ScrollToTopOnMount/>
             <Route path ="/gallery" exact component={GalleryLink}/>
             <Route path ="/gallery_view" exact render={()=>(
                   <Gallery photos={photos} direction={"column"}
                   onClick={openLightbox}/>
             )}/>
<ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
            <section className="section">
                <div className="container">
                    <div className ="row section_row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                             <Route path="/" exact component={Title} />
                             <Route path="/" exact component={PhotoListLeft}/> 
                        </div>
                        <Route path="/" exact render={()=><PhotoListRight/>}/>
                    </div>
                </div>
            </section>
            <Route path="/" exact component={BlogList}/>
            <Arrow_up/>
        </Fragment>
    )
}

export default Main