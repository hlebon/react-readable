import React, { Component } from 'react'
import sortBy from 'sort-by'
import * as ReadableAPI from '../utils/ReadableAPI'
import { connect } from 'react-redux'
import { fetchSinglePost, fetchComments, changeVote, voteAComment } from '../../actions'

class DetailPage extends Component{

    componentDidMount(){
        this.props.setSinglePost(this.props.postId)
        this.props.fetchComments(this.props.postId)
    }

    handleVote = (post, score) => {
        console.log(post.id, score)
        this.props.changeVote(post.id, score)
    }

    handleVoteComment = (comment, score) => {
        const comments = this.props.comments;
        this.props.voteAcomment(comment, score, comments)
    }

    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    render(){
        console.log(this.props);
        const { post, comments } = this.props;
        comments.sort(sortBy("-voteScore"));

        return (
            <div className="d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header ">
                            <ul className="list-inline">
                                <li className="btn btn-outline-primary list-inline-item">Edit</li>
                                <li className="btn btn-outline-secondary list-inline-item">Delete</li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="p-3">
                                <h4 className="text-center card-title">{post.title}</h4>
                                <div className="list-inline card-subtitle mb-2 text-muted">
                                    <div className="list-inline-item">by: <span>{post.author}</span></div>
                                    <div className="list-inline-item">date: <span>{this.castDate(post.timestamp)}</span></div>
                                    <div className="list-inline-item float-right">vote: <span>{post.voteScore}</span></div>
                                </div>
                            </div>
                            <p className="card-text">{post.body}</p>
                        </div>
                        <div className="card-footer">
                            <div className="list-inline float-right">
                                <button onClick={() => this.handleVote(post, "upVote")} className="btn btn-secondary list-inline-item">Up</button>
                                <button onClick={() => this.handleVote(post, "downVote")} className="btn btn-secondary list-inline-item">Down</button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-5">
                        <h4>Write a response</h4>
                        <form>
                            <div className="form-group">
                                <label>Usuario</label>
                                <input type="text" className="form-control" placeholder="Usuario"/>
                            </div>
                            <div className="form-group">
                                <label>Comment</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <button className="btn btn-outline-success">
                                Comment
                            </button>
                        </form>
                    </div>
                    <div className="mb-5">
                        <div>
                            <h4>Comments</h4>
                        </div>
                        <div className="list-group">
                            {comments.map((comment)=> (
                                <div key={comment.id} className="mt-2 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="mb-3 d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">{comment.author}</h6>
                                        <small>{this.castDate(comment.timestamp)}</small>
                                    </div>
                                    <p className="mb-1">{comment.body}</p>
                                    <div className="text-muted mt-3 d-flex w-100 justify-content-between">
                                        <small>
                                            score: {comment.voteScore}
                                        </small>
                                        <small>
                                            <button onClick={() => this.handleVoteComment(comment, "upVote")} className="btn btn-primary btn-sm">up</button>
                                            <button onClick={() => this.handleVoteComment(comment, "downVote")} className="btn btn-primary btn-sm">down</button>
                                        </small>
                                        <small>
                                            <a>Edit</a> | <a>Delete</a>
                                        </small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    return { 
        post: state.post.singlePost,
        comments: state.post.comments
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        changeVote: (id, score) => dispatch((changeVote(id, score))),
        setSinglePost: (data) => dispatch((fetchSinglePost(data))),
        fetchComments: (data) => dispatch((fetchComments(data))),
        voteAcomment: (id, score, comments) => dispatch((voteAComment(id, score, comments)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)