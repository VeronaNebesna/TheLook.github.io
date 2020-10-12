import React, {Fragment} from "react"
import arrow from  "./arrow-right-white.png"
import "./Footer.css"

const Footer = () =>{
    return(
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row footer_row">
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            <div className="title_footer">
                                <p>Get in touch</p>
                                <span>
                                Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollic itudin. Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti.
                                </span>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                                <div className="input_list">
                                    <input type="text" placeholder="Your Name"/>
                                    <input type="email" placeholder="Your Email"/>
                                    <input type="text" placeholder="Subject"/>
                                    <input type="text" placeholder="Message"/>
                                    <button className="send_btn">send message
                                    <img src={arrow}/></button>
                                </div>
                            </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer