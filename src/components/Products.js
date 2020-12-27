import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map(product => (
                        <li key={product.id}>
                            <div className="product">
                                <a href={"#" + product._id}> 
                                    <img src={product.image} alt={product.title} />
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div>
                                    {product.price}
                                </div>
                                <button className="button primary">
                                    Add to cart
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
