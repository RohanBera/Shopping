import React, { Component } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'
import data from "./data.json"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: data.products, 
			size: "",
			sort: "", 
			cartItems: JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : []
		}
	}

	addToCart = (product) => {
		const cartItems = this.state.cartItems.slice()
		let alreadyInCart = false

		cartItems.forEach((cartItem) => {
			if(cartItem._id === product._id) {
				cartItem.count++
				alreadyInCart = true
			}
		})

		if (!alreadyInCart) {
			cartItems.push({...product, count: 1})
		}

		this.setState({
			cartItems: cartItems
		})

		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}

	removeFromCart = (product) => {
		const cartItems = this.state.cartItems.slice()
		const updatedItems = cartItems.filter(item => item._id !== product._id)
		this.setState({
			cartItems : updatedItems, 
		})
		localStorage.setItem('cartItems', JSON.stringify(updatedItems))
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

	placeOrder = (order) => {
		alert("Your order : " + order)
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
							<Products 
								products={this.state.products} 
								addToCart={this.addToCart}	
							/>
						</div>
						<div className="sidebar">
							<Cart 
								cartItems={this.state.cartItems} 
								removeFromCart={this.removeFromCart}	
								placeOrder={this.placeOrder}
							/>
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
