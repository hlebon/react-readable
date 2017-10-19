import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component{
    render(){

        const { categories } = this.props;
        return (
            <div>
                {categories.length > 0 ? (
                    <div className="list-inline">
                        <h5>Categories</h5>
                        { this.props.categories.map( ( category ) => (
                            <Link to={`/category/${category.path}`}  key={category.name} className="text-white p-2 m-1 list-inline-item border bg-secondary rounded">
                            {category.name}</Link>
                        ))}
                        <Link to="/"  key="all" className="text-white p-1 m-1 list-inline-item border bg-secondary rounded">
                            All</Link>
                    </div>
                ) : (
                    <div className="list-group">
                        
                    </div>
                )}
            </div>
        )
    }
}

//export default Categories
export default Categories