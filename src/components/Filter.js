import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count}  Products
                </div>

                {/* <div className="filter-gender">
                    Gender {"  "}
                    <select value={this.props.gender} onChange={this.props.filterProductsGender}>
                        <option value="">ALL</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                
                <div className="filter-size">
                    Filter {"  "}
                    <select value={this.props.size} onChange={this.props.filterProductsSize}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div> */}
            </div>

        )
    }
}
