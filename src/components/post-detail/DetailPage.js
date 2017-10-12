import React, { Component } from 'react'
import sortBy from 'sort-by'
import * as ReadableAPI from '../utils/ReadableAPI'

class DetailPage extends Component{
    state = {
        post : {},
        commentList: []
    }

    componentDidMount(){
        ReadableAPI.getPostsDetails(this.props.postId).then( (value) => {
            this.setState( { post: value } )
        })

        ReadableAPI.getCommentByPost(this.props.postId).then( (value) => {
            console.log(value)
            this.setState( { commentList: value } )
        })
    }

    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    render(){

        const post = this.state.post;
        const comments = this.state.commentList;
        comments.sort(sortBy(`${this.state.filterBy}`));

        return (
            <div className="col-lg-8">
                <div className="card mb-3">
                    <div className="card-body">
                        <h4 className="card-title">{post.title}</h4>
                        <div className="card-subtitle mb-2 text-muted d-flex flex-row">
                            <div className="p-2">autor: <span>{post.author}</span></div>
                            <div className="p-2">date: <span>{this.castDate(post.timestamp)}</span></div>
                            <div className="p-2">vote: <span>{post.voteScore}</span></div>
                            <div className="p-2 float-right">
                                <span className="">Edit</span>
                                <span className="">Delete</span>
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
                            <div className="mt-2 list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1">{comment.author}</h6>
                                    <small>{comment.voteScore}</small>
                                </div>
                                <p className="mb-1">{comment.body}</p>
                                <small className="float-left">
                                    {comment.timestamp}
                                </small>
                                <small className="float-right">
                                    <a>Edit</a> | <a>Delete</a>
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailPage