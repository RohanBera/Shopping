import React, { Component } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
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

	filterProducts = (event) => {
		const productSize = event.target.value
	
		console.log(productSize)
		if (productSize === "") {
			this.setState({ 
				size: productSize, 
				products: data.products
			})
		}
		else {
			this.setState({ 
				size: productSize, 
				products: data.products.filter(product => product.availableSizes.indexOf(productSize) >= 0)
			})
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
							<Filter count={this.state.products.length} 
								size={this.state.size}
								// sort={this.state.sort}
								filterProducts={this.filterProducts}
								// sortProducts={this.sortProducts}
							/>
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
