import React, { Component } from 'react'

export default class FilterCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories : {
                department: [],
                gender: ["male", "female"],
                size: [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
            }
        }
    }

    componentDidMount () {

        // checking all products for available categories
        // can we do this for size too????

        var departments = this.state.categories.department

        this.props.products.forEach(product => {
            if(!departments.includes(product.department)) {
                departments.push(product.department)
            }
        })

        this.setState(prevState => ({
            categories: {
                ...prevState.categories,
                department: departments
            } 
        }))
    }

    render() {
        return (
            <div>
                {Object.keys(this.state.categories).map((categoryItem, index) => (
                    <div>
                        <p>{categoryItem}</p>
                        <ul key={index}>
                            {this.state.categories[categoryItem].map((subItem, index) => (
                                <li key={index}>    
                                    <p>{subItem}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}
