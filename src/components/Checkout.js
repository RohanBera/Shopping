import React, { Component } from 'react'

export default class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state={
            loginDiv: true,
            addressDiv: false,
            summaryDiv: false,
            paymentDiv: false,
            cartItems: JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : []
        }
    }

    removeFromCart = (product) => {
		const cartItems = this.state.cartItems.slice()
		const updatedItems = cartItems.filter(item => item._id !== product._id)
		this.setState({
			cartItems : updatedItems, 
		})
		localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    }

    submitUserDetails = (event) => {
        event.preventDefault()

        this.setState({
            loginDiv: false,
            addressDiv: true,
        })
    }

    submitDeliveryAddress = (event) => {
        event.preventDefault()

        this.setState({
            addressDiv: false,
            summaryDiv: true,
        })
    }

    submitOrderSummary = (event) => {
        event.preventDefault()

        this.setState({
            summaryDiv: false,
            paymentDiv: true,
        })
    }

    render() {
        const cartItems =  this.state.cartItems
        var total = cartItems.reduce((total, item) => (total + item.price * item.count), 0)

        return (
            <div className="checkout">
                <div className="checkout-container">
                    <div className="checkout-item">
                        <div className="checkout-header">
                            <span>1</span> user details 
                        </div>
                        {this.state.loginDiv && 
                        <div className="checkout-body">
                            <form onSubmit={this.submitUserDetails}>
                                <ul className="form-container">
                                    <li>
                                        <label>Name</label>
                                        <input 
                                            name="name" 
                                            type="text"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <label>Email</label>
                                        <input 
                                            name="email"
                                            type="email"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <label>10 digit Mobile Number</label>
                                        <input 
                                            name="phno"
                                            type="text"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <button className="button primary" type="submit">Next</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        }
                    </div>

                    <div className="checkout-item">
                        <div className="checkout-header">
                            <span>2</span> Delivery address
                        </div>
                        {this.state.addressDiv && 
                        <div className="checkout-body">
                            <form onSubmit={this.submitDeliveryAddress}>
                                <ul className="form-container">
                                    <li>
                                        <label>Pincode</label>
                                        <input 
                                            name="pincode" 
                                            type="text"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <label>Locality</label>
                                        <input 
                                            name="locality"
                                            type="text"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <label>Area and Street</label>
                                        <textarea 
                                            name="areaStreet"
                                            type="text"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <label>City/District/Town</label>
                                        <input 
                                            name="city"
                                            type="text"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <label>State</label>
                                        <input 
                                            name="state"
                                            type="text"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <label>Landmark (optional)</label>
                                        <input 
                                            name="landmark"
                                            type="text"
                                            // required
                                            // onChange={this.handleChange}
                                        />
                                    </li>
                                    <li> 
                                        <label>Address Type</label>
                                        <input 
                                            name="addrType"
                                            type="radio"
                                            required
                                            value="home"
                                        /> Home (All day delivery)
                                        <input 
                                            name="addrType"
                                            type="radio"
                                            value="work"
                                            required
                                        /> Work (Mon - Fri between 10AM and 5PM)
                                    </li>
                                    <li>
                                        <button className="button primary" type="submit">Deliver here</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        }
                    </div>

                    <div className="checkout-item">
                        <div className="checkout-header">
                            <span>3</span> order summary
                        </div>
                        {this.state.summaryDiv &&
                            <div className="checkout-body">
                                <ul className="main-cart-items">
                                    <div className="main-cart-header">({cartItems.length} items)</div>
                                    {cartItems.map(cartItem => (
                                        <li key={cartItem._id}>
                                            <div>
                                                <img src={cartItem.image} alt={cartItem.title} />
                                            </div>
                                            <div>
                                                <div className="main-cart-item-title">{cartItem.title}</div>
                                                <div>{"Quantity:  " + cartItem.count}</div>
                                                <div className="right">
                                                    {"\u20B9  "+ cartItem.price} x {cartItem.count + "  "} 
                                                    <button className="button" onClick={() => this.removeFromCart(cartItem)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <button className="button primary" onClick={this.submitOrderSummary}>Continue</button>
                            </div>
                        }
                    </div>

                    <div className="checkout-item">
                        <div className="checkout-header">
                            <span>4</span> payment option
                        </div>
                        {this.state.paymentDiv && 
                        <div className="checkout-body">
                            <form >
                                <ul className="form-container">
                                    <li>
                                        <input 
                                            name="payment" 
                                            type="radio"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                        <label>UPI (PhonePe / Paytm / Google Pay)</label>
                                    </li>
                                    <li>
                                        <input 
                                            name="payment"
                                            type="radio"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                        <label>Wallets</label>
                                    </li>
                                    <li>
                                        <input 
                                            name="payment"
                                            type="radio"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                        <label>Credit / Debit / ATM Card</label>
                                    </li>
                                    <li>
                                        <input 
                                            name="payment"
                                            type="radio"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                        <label>Net Banking</label>
                                    </li>
                                    <li>
                                        <input 
                                            name="payment"
                                            type="radio"
                                            required
                                            // onChange={this.handleChange}
                                        />
                                        <label>Cash on Delivery</label>
                                    </li>
                                    <li>
                                        <button className="button primary" type="submit">Pay</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        }
                    </div>
                </div>

                {cartItems.length !==0 && (
                    <div className="checkout-total">
                        <div className="row">
                            <span>{"Price (" + cartItems.length + " items) : "}</span> 
                            <span>{"\u20B9  " + total}</span>
                        </div>
                        <div className="row">
                            <span>{"Delivery Charges : "}</span> 
                            <span>{"\u20B9  120"}</span>
                        </div>
                        <div className="row final">
                            <span>{"Total : "}</span> 
                            <span>{"\u20B9  " + (total + 120) }</span>
                        </div>
                    </div>
                )}
            </div>   
        )
    }
}
