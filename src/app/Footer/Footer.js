import React, {Fragment} from "react"
import FooterInputs from './FooterInputs'
import FooterGetInTouch from "./FooterGetInToch"
import "./Footer.css"

const Footer = () =>{
    return(
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row footer_row">
                        <FooterGetInTouch/>
                        <FooterInputs/>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer