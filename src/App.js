import React, { Component } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'
import SearchBar from './components/SearchBar'
import FilterCategories from './components/FilterCategories'
import data from "./data.json"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: data.products, 
			search: "",			
			size: "",
			sort: "", 
			gender: "",
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

	filterProductsSize = (event) => {
		const productSize = event.target.value
	
		console.log(productSize)
		if (productSize === "") {
			this.setState({ 
				size: productSize, 
				products: data.products,
			})
		}
		else {
			this.setState({ 
				size: productSize, 
				products: data.products.filter(product => product.availableSizes.indexOf(productSize) >= 0)
			})
		}
	}

	filterProductsGender = (event) => {
		const productGender = event.target.value
	
		console.log(productGender)
		if (productGender === "") {
			this.setState({ 
				gender: productGender, 
				products: data.products
			})
		}
		else {
			this.setState({ 
				gender: productGender, 
				products: data.products.filter(product => product.gender === productGender)
			})
		}
	}

	searchProducts = (searchedProduct) => {
		console.log(searchedProduct)
		if (searchedProduct === "") {
			this.setState({ 
				products: data.products
			})
		}
		else {
			this.setState({ 
				products: data.products.filter(product => product.title.toLowerCase().includes(searchedProduct.toLowerCase()))
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
					<SearchBar 
						searchProducts={this.searchProducts}
					/>
				</header>
				<main>
					<div className="content">
						<div className="filter-bar">
							<FilterCategories 
								products={data.products}
							/>
						</div>
						<div className="main">
							<Filter count={this.state.products.length} 
								size={this.state.size}
								filterProductsSize={this.filterProductsSize}

								gender={this.props.gender}
								filterProductsGender={this.filterProductsGender}
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
