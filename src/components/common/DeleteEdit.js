import React, { Component } from 'react'

class DeleteEdit extends Component{
    render(){
        const { position } = this.props
        return (
            <div className={`list-inline-item ${position}`}>
                <span className="btn-edit mr-2 list-inline-item">Edit</span>
                <span className="btn-delete mr-2 list-inline-item">Delete</span>
            </div>
        )
    }
}

export default DeleteEdit