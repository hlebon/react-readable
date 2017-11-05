import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeleteEdit extends Component{

    handleAction = (id, type) => {
        console.log(id, type)
        this.props.handleAction(id, type)
    }

    render(){
        const { position, id } = this.props
        return (
            <div className={`list-inline-item ${position}`}>
                <span onClick={() => this.handleAction(id, "edit")} className="btn-edit mr-2 list-inline-item">Edit</span>
                <span onClick={() => this.handleAction(id, "delete")} className="btn-delete mr-2 list-inline-item">Delete</span>
            </div>
        )
    }
}

export default DeleteEdit