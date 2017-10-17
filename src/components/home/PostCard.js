import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostCard extends Component{
    handleVote = (post, vote) => {
        this.props.handleVote(post, vote)
    }

    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    render(){
        const { postList } = this.props
        return (             
                <div className="card-deck">
                    {postList ? (
                        postList.map( ( post ) => (
                            <div key={ post.id } className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <Link to={`/post/${post.category}/${post.id}`} >{post.title}</Link>
                                    </h4>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {this.castDate(post.timestamp)}
                                        </small>
                                    </p>
                                    <p className="card-text">{post.body}</p>
                                </div>
                                <div className="card-footer ">
                                    <div className="float-left">
                                        <button onClick={() => this.handleVote(post, "upVote")} type="button" className="btn btn-secondary">up</button>
                                        <button onClick={() => this.handleVote(post, "downVote")} type="button" className="btn btn-primary">down</button>
                                    </div>
                                    <div className="float-right">
                                        <span className="badge badge-info">{post.voteScore}</span>
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