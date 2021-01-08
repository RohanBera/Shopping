import React, { Component } from 'react'

export default class FilterCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.categories).map((categoryName, index) => (
                    <div key={index}>
                        <p>{categoryName}</p>
                        <ul>
                            {Object.keys(this.props.categories[categoryName]).map((categoryItem, index) => (
                                <li key={categoryItem + index}>    
                                    <input 
                                        type="checkbox" 
                                        name={categoryName} 
                                        value={categoryItem} 
                                        checked={this.props.categories[categoryName][categoryItem]} 
                                        onChange={this.props.handleCheckboxFilter} 
                                    />
                                    <span>{categoryItem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}
