import React, { Component } from 'react'

class DeleteEdit extends Component{

    handleDelete = (postId, type) => {
        this.props.onDeletePost(postId, type);
    }

    render(){
        const { position, postId } = this.props
        return (
            <div className={`list-inline-item ${position}`}>
                <span onClick={() => this.handleDelete(postId, "edit")} className="btn-edit mr-2 list-inline-item">Edit</span>
                <span onClick={() => this.handleDelete(postId, "delete")} className="btn-delete mr-2 list-inline-item">Delete</span>
            </div>
        )
    }
}

export default DeleteEdit