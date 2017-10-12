import React, { Component } from 'react'
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
        console.log(post)
        return (
            <div className="col-lg-10">
                <div className="card mb-3">
                    <div className="card-body">
                        <h4 className="card-title">{post.title}</h4>
                        <div className="card-subtitle mb-2 text-muted d-flex flex-row">
                            <div className="p-2">autor: <span>{post.author}</span></div>
                            <div className="p-2">date: <span>{this.castDate(post.timestamp)}</span></div>
                            <div className="p-2">vote: <span>{post.voteScore}</span></div>
                        </div>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
                <div className="card mb-3">
                    <div></div>
                </div>
            </div>
        )
    }
}

export default DetailPage