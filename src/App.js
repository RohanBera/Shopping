import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Cart from './components/Cart'
import SearchBar from './components/SearchBar'

export default class App extends Component {
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
