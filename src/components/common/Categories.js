import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component{
    render(){

        const { categories } = this.props;
        console.log(this.props);
        return (
            <div>
                <h3>Categories</h3>
                {categories && 
                    <div className="list-group">
                        {this.props.categories.map( ( category ) => (
                            <Link to={`/category/${category.path}`}  key={category.name} className="list-group-item list-group-item-action">
                            {category.name}</Link>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

//export default Categories
export default Categories