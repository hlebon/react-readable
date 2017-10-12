import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Categories extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <h3>Categories</h3>
                <div className="list-group">
                    {this.props.categories.map( ( category ) => (
                        <Link to={`/category/${category.path}`}  key={category.name} className="list-group-item list-group-item-action">
                        {category.name}</Link>
                    ) )}
                </div>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    console.log(state)
    return { 
        categories: state.categories
    }
}

//export default Categories
export default connect(mapStateToProps)(Categories)