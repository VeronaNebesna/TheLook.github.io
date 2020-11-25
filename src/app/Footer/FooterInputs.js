import React, {Fragment, Component} from "react"
import arrow from  "./arrow-right-white.png"
import axios from "axios"

class Footer extends Component{
    state={
        name:"",
        address:"",
        message:"",
        isOrderSave:false
    }
    touchName =(e)=>{
        this.setState({
            name: e.target.value,
        })
    }
    touchAddress=(e)=>{
        this.setState({
            address: e.target.value,
        })
    }
    touchMessage=(e)=>{
        this.setState({
            message: e.target.value
        })
    }
    sendForm=(e)=>{
        e.preventDefault();
        axios.post("https://my-json-server.typicode.com/VeronaNebesna/server/orders",{
            name:this.state.name,
            address:this.state.address,
            message: this.state.message

        })
        .then(response => response.data)
        .then(({name, address, message})=> this.setState({
            name,
            message,
            address,
            isOrderSave:true
        }))
    }
    renderMessage=()=>{
        return(
            <div className="render_mess">
                Dear {this.state.name}, thanks for you feedback!
            </div>
        )
    }
    renderForm=()=>{
        return(
            <form className="input_list" onSubmit={this.sendForm}>
                <input type="text" placeholder="Your Name" value={this.state.name} onChange={this.touchName}/>
                <input type="email" placeholder="Your Email" value={this.state.address} onChange={this.touchAddress}/>
                <input type="text" placeholder="Message" value={this.state.message} onChange={this.touchMessage}/>
                <button className="send_btn" type="submit">
                    send message
                <img src={arrow}/></button>
            </form>
        )}
    render(){
         return(
        <Fragment>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                {this.state.isOrderSave!==true? this.renderForm() : this.renderMessage()}
            </div>
        </Fragment>
    )
    }
}

export default Footer