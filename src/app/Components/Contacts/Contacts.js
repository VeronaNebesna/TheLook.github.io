import React, {Fragment} from "react"
import "./Contacts.css"

const Contacts = () =>{
    return(
        <Fragment>
            <div className="container">
                <div className="row contact_row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="contact">
                            <div className="gallery_title">
                                <p>Contact</p>
                            </div>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis et augue non mollis. Sed sagittis.</span>
                         
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                    <p className="contact_title">The Look Gallery</p>
                                    <div className="contact_info">
                                        <i class="fas fa-map-marker-alt"></i><p className="location">712 Mayo Street, Lexington, Kentucky 40507, AR</p>
                                    </div>
                                    <div className="contact_info">
                                        <i class="fas fa-phone"></i><p className="phone_number">678-434-6837</p>
                                    </div>
                                    <div className="contact_info">
                                        <i class="fas fa-envelope"></i><p className="email">hello@yourwebsite.com</p>
                                    </div>
                                    <div className="contact_info">
                                        <i class="far fa-clock"></i><p className="hours">M - F: 09:00 AM - 17:00 PM</p>
                                    </div>
                                    
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                    <div className="maps">
                                        <img src="/images/maps.png"/>
                                    </div>
		                        
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
        </Fragment>
    )
}

export default Contacts