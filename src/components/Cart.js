import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false,
        }
    }

    handleChange = (event) => {
        var { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    placeOrder = (event) => {
        event.preventDefault()

        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItem: this.props.cartItems,
        }

        this.props.placeOrder(order);
    }

    render() {
        const { cartItems } = this.props
        return (
            <div>
                {cartItems.length === 0 ? 
                    <div className="cart cart-header">Cart is Empty</div> :
                    <div className="cart cart-header">{cartItems.length} items in cart</div>
                }
                <div className="cart">
                    <Fade left cascade >
                    <ul className="cart-items">
                        {cartItems.map(cartItem => (
                            <li key={cartItem._id}>
                                <div>
                                    <img src={cartItem.image} alt={cartItem.title} />
                                </div>
                                <div>
                                    {/* <div>{cartItem.title}</div> */}
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
                    </Fade>
                </div>
                {cartItems.length !==0 && (
                    <>  
                        <div className="cart"> 
                            <div className="total">
                                {"Total : \u20B9  " + cartItems.reduce((total, item) => (total + item.price * item.count), 0)}
                                <button className="button primary" onClick={()=> this.setState({showCheckout: true})}>
                                Proceed
                                </button>
                            </div>
                        </div>

                        {this.state.showCheckout && (
                                <Fade right cascade >
                                <div className="cart">
                                <form onSubmit={this.placeOrder}>
                                    <ul className="form-container">
                                        <li>
                                            <lable>Name</lable>
                                            <input 
                                                name="name" 
                                                type="text"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <lable>Email</lable>
                                            <input 
                                                name="email"
                                                type="email"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <lable>Address</lable>
                                            <input 
                                                name="address"
                                                type="text"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <button className="button primary" type="submit">Checkout</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            </Fade>
                        )} 
                    </>
                )}
            </div>
        )
    }
}
