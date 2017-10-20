import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostCard extends Component{
    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    render(){

        const { postList } = this.props
        console.log(postList);
        return (             
                <div className="card-deck">
                    {postList.length > 0 ? (
                        postList.map( ( post ) => (
                            <div key={ post.id } className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <Link to={`/post/${post.category}/${post.id}`} >{post.title}</Link>
                                    </h4>
                                    <div className="card-text">
                                        <div className="list-inline card-subtitle mb-2 text-muted">
                                            <div className="mr-2 list-inline-item font-italic">date: <small className="">{this.castDate(post.timestamp)}</small></div>
                                            <div className="mr-2 list-inline-item font-italic">by: <small className="">{post.author}</small></div>
                                        </div>
                                    </div>
                                    <p className="card-text">{post.body}</p>
                                </div>
                                <div className="card-footer text-muted list-inline">
                                    <div className="list-inline-item">
                                        <span className="badge badge-info">vote: {post.voteScore}</span>
                                    </div>
                                    <div className="list-inline list-inline-item">
                                        <span className="downvote mr-2 list-inline-item"></span>
                                        <span className="upvote mr-2 list-inline-item"></span>
                                    </div>
                                    <div className="list-inline list-inline-item float-right">
                                        <span className="btn-edit mr-2 list-inline-item">Edit</span>
                                        <span className="btn-delete mr-2 list-inline-item">Delete</span>
                                    </div>
                                </div>
                            </div>
                            ))
                    ) : (
                        <div className="card text-center">
                            <div className="card-body">
                                <h2>There is no post to show</h2>
                            </div>
                        </div>
                    )}
                </div>
        )
    }
}

export default PostCard