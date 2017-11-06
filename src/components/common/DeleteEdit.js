import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeleteEdit extends Component{

    handleAction = (obj, type) => {
        console.log(obj, type)
        this.props.handleAction(obj, type)
    }

    render(){
        const { position, obj } = this.props
        return (
            <div className={`list-inline-item ${position}`}>
                <span onClick={() => this.handleAction(obj, "edit")} className="btn-edit mr-2 list-inline-item">Edit</span>
                <span onClick={() => this.handleAction(obj, "delete")} className="btn-delete mr-2 list-inline-item">Delete</span>
            </div>
        )
    }
}

export default DeleteEdit