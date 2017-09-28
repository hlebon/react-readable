import React, { Component } from 'react'

class Categories extends Component{
    render(){
        return (
            <div className="col-lg-2">
                <h3>Categories</h3>
                <div className="list-group">
                    <button className="list-group-item list-group-item-action">React</button>
                    <button className="list-group-item list-group-item-action">Asp.net core</button>
                    <button className="list-group-item list-group-item-action ">Open Source</button>
                </div>
            </div>
        )
    }
}

export default Categories