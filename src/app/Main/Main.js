import React, { Fragment,useState, useCallback  } from "react";
import {Route} from "react-router-dom";
import Gallery from "react-photo-gallery";
import PhotoList  from "./PhotoList/ProtoList";
import BlogList from "./Blog/BlogList";
import Arrow_up from "./Arrow_up/Arrow_up";
import {photos} from "./photos";
import ScrollToTopOnMount from "./ScrollToTopMount";
import GalleryLink from "../Components/Gallery/GalleryLink";
import Carousel, { Modal, ModalGateway } from "react-images";
import Artist from "../Components/Artists/Artists"
import "./Main.css";
import Contacts from "../Components/Contacts/Contacts";





const Main = ({
  images
}) =>{
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, {index}) => {
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
			      <Route path ="/artists" exact component={Artist}/>
            <Route path ="/contact" exact component={Contacts}/>
             <Route path ="/gallery_view" exact render={()=>(
                 <div className="gallery_view">
                     <p>All photos</p>
                        <Gallery photos={photos} direction={"column"} columns={3}
                        onClick={openLightbox}/>
                 </div>
             )}/>

            <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        swipe:"touch"
                      }))}/>
                  </Modal>
                ) : null}
            </ModalGateway>

            <section className="section">
                <div className="container">
                    <div className ="row section_row">
						          <Route path="/" exact render={ ()=> <PhotoList
                        images={images}
                      />}/>
                    </div>
                </div>
            </section>
            <Route path="/" exact component={BlogList}/>
            <Arrow_up/>
        </Fragment>
    )
}

export default Main