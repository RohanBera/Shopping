import React, { Component } from 'react'
import Products from './components/Products'
import data from "./data.json"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: data.products, 
			size: "",
			sort: ""
		}
	}

	render() {
		return (
			<div className="grid-container">
				<header >
					<a href="/">Bmazon</a> 
				</header>
				<main>
					<div className="content">
						<div className="main">
							<Products products={this.state.products} />
						</div>
						<div className="sidebar">
							Cart
						</div>	
					</div>
				</main>
				
				<footer>
					All rights reserved.
				</footer>
			</div>
		)
	}
}

export default App;
