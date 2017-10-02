import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component{
    render(){
        return (
            <div className="col-lg-2">
                <h3>Categories</h3>
                <div className="list-group">
                        <Link to="/category" className="list-group-item list-group-item-action">Name</Link>
                </div>
            </div>
        )
    }
}

export default Categories