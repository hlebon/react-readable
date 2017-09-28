import React, { Component } from 'react'

class PostCard extends Component{
    render(){
        const posts = this.props.posts
        console.log(posts)
        return (
            <div className="card-deck">
                {posts.map(post =>(
                    <div className="card" key={post.id}>
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <p className="card-text">{post.body}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">options and buttons go here</small>
                        </div>
                    </div>
                ))}
            </div>
            
        )
    }
}

export default PostCard