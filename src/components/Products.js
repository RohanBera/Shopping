import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

export default class Products extends Component {
    render() {
        return (
            <div>
                <Fade bottom cascade>
                    <ul className="products">
                        {this.props.products.map(product => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#" + product._id}> 
                                        <img src={product.image} alt={product.title} />
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className="product-price">
                                        <div>
                                            {"\u20B9 " + product.price}
                                        </div>
                                        <button className="button primary" onClick={() => this.props.addToCart(product)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
            </div>
        )
    }
}
