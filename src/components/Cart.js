import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props
        return (
            <div>
                {cartItems.length === 0 ? 
                    <div className="cart cart-header">Cart is Empty</div> :
                    <div className="cart cart-header">{cartItems.length} items in cart</div>
                }
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(cartItem => (
                            <li key={cartItem._id}>
                                <div>
                                    <img src={cartItem.image} alt={cartItem.title} />
                                </div>
                                <div>
                                    <div>{cartItem.title}</div>
                                    <div className="right">
                                        {"\u20B9  "+ cartItem.price} x {cartItem.count + "  "} 
                                        <button className="button" onClick={() => this.props.removeFromCart(cartItem)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {cartItems.length !==0 && (
                    <div className="cart">
                        <div className="total">
                            {"Total : \u20B9  " + cartItems.reduce((total, item) => (total + item.price * item.count), 0)}
                        </div>
                        <button className="button primary">
                            Proceed
                        </button>
                    </div>
                )}
            </div>
        )
    }
}
