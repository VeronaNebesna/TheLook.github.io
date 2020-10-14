import React, {Fragment} from "react"
import arrow from  "./arrow-right-white.png"

const Footer = () =>{
    return(
        <Fragment>
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
        </Fragment>
    )
}

export default Footer