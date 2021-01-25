import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Cart from './components/Cart'
import SearchBar from './components/SearchBar'
import Checkout from './components/Checkout'

export default class App extends Component {
    render() {
        return (
            <div className="grid-container">
                <header >
                    <a href="/">Bmazon</a> 
                    <SearchBar 
                        searchProducts={this.searchProducts}
                    />
                    <a href="/">Rohan</a>
                    <a href="/cart">My Cart</a>
                </header>

                <main>
                    <Router>
                        <Switch>
                            <Route 
                                exact
                                path="/"
                                component={Home}
                            />
                            <Route 
                                exact
                                path="/cart"
                                component={Cart}
                            />
                            <Route 
                                exact
                                path="/checkout"
                                component={Checkout}
                            />
                        </Switch>
                    </Router>
                </main>
			
                <footer>
					Footer Footer Footer
				</footer>
			</div>
        )
    }
}
