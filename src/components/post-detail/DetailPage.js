import React, { Component } from 'react'
import sortBy from 'sort-by'
import * as ReadableAPI from '../utils/ReadableAPI'
import { connect } from 'react-redux'
import { fetchSinglePost, fetchComments } from '../../actions'

class DetailPage extends Component{
    state = {
        post : {},
        commentList: []
    }

    componentDidMount(){
        this.props.setSinglePost(this.props.postId)
        this.props.fetchComments(this.props.postId)
    }

    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    render(){
        const { post, comments } = this.props;
        comments.sort(sortBy("-voteScore"));

        return (
            <div className="d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-header ">
                            <ul className="list-inline">
                                <li className="btn btn-outline-primary list-inline-item">Edit</li>
                                <li className="btn btn-outline-secondary list-inline-item">Delete</li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <h4 className="card-title">{post.title}</h4>
                                    <div className="card-subtitle mb-2 text-muted">
                                        <div className="">autor: <span>{post.author}</span></div>
                                        <div className="">date: <span>{this.castDate(post.timestamp)}</span></div>
                                        <div className="">vote: <span>{post.voteScore}</span></div>
                                    </div>
                            </div>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                    <div>
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
                        </form>
                    </div>
                    <div>
                        <div>
                            <h4>Comments</h4>
                        </div>
                        <div className="list-group">
                            {comments.map((comment)=> (
                                <div key={comment.id} className="mt-2 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1">{comment.author}</h6>
                                        <small>{comment.voteScore}</small>
                                    </div>
                                    <p className="mb-1">{comment.body}</p>
                                    <small className="float-left">
                                        {this.castDate(comment.timestamp)}
                                    </small>
                                    <small className="float-right">
                                        <a>Edit</a> | <a>Delete</a>
                                    </small>
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
    console.log(state)
    return { 
        post: state.post.singlePost,
        comments: state.post.comments
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
       setSinglePost: (data) => dispatch((fetchSinglePost(data))),
       fetchComments: (data) => dispatch((fetchComments(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)