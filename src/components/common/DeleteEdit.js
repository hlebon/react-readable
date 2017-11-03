import React, { Component } from 'react'

class DeleteEdit extends Component{

    handleDelete = (id, type) => {
        this.props.onDelete(id, type);
    }

    render(){
        const { position, id } = this.props
        return (
            <div className={`list-inline-item ${position}`}>
                <span onClick={() => this.handleDelete(id, "edit")} className="btn-edit mr-2 list-inline-item">Edit</span>
                <span onClick={() => this.handleDelete(id, "delete")} className="btn-delete mr-2 list-inline-item">Delete</span>
            </div>
        )
    }
}

export default DeleteEdit