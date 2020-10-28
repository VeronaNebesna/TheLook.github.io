import React, {Component} from 'react';
import Header from "./app/Header/Header"
import Main from "./app/Main/Main"
import Footer from "./app/Footer/Footer"
import "./scc_style/reset.css"
import "./scc_style/grid.css"


const App =()=>{
		return (
			<div>
				<Header/>
				<Main/>
				<Footer/>
			</div>
	);
}

export default App;
