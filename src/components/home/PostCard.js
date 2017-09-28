import React, { Component } from 'react'

class PostCard extends Component{
    render(){
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Post Title</h4>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">options and buttons go here</small>
                </div>
          </div>
        )
    }
}

export default PostCard