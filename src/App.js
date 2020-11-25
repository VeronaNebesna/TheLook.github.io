import React, {Component} from 'react';
import Header from "./app/Header/Header"
import Main from "./app/Main/Main"
import Footer from "./app/Footer/Footer"
import "./scc_style/reset.css"
import "./scc_style/grid.css"
import axios from 'axios'

class App extends Component{
	state={
		images:[]
	}
	componentDidMount(){
		axios.get("https://my-json-server.typicode.com/VeronaNebesna/server/posts")
		.then(response => response.data)
		.then(images => this.setState(()=>({
			images
		})))
	}
	render(){
		return (
			<div>
				<Header/>
				<Main
				images={this.state.images}/>
				<Footer/>
			</div>
	);
	}	
}

export default App;
