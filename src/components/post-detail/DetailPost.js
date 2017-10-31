import React, { Component } from 'react'
import DeleteEdit from '../common/DeleteEdit'
import VoteSection from '../common/VoteSection'


class PostDetail extends Component{

    handleVote = (post, score) => {
        this.props.voteAPost(post, score)
    }

    handleAction = (postId, type) => {
        console.log(postId, type)
        this.props.onHandleAction(postId, type)
    }

    render(){

        const { post } = this.props

        return (
            <div className="border-0 card">
                <div className="card-body">
                    <div className="p-3">
                        <h2 className="text-center card-title"><strong>{post.title}</strong></h2>
                        <div className="list-inline card-subtitle mb-2 text-muted">
                            <div className="mr-2 list-inline-item font-italic">by: <span className="badge badge-info">{post.author}</span></div>
                            <div className="mr-2 list-inline-item font-italic">vote: <span className="badge badge-info">{post.voteScore}</span></div>
                            <div className="list-inline-item font-italic">comments: <span className="badge badge-info">{post.commentCount}</span></div>
                            <div className="list-inline-item font-italic float-right">date: <span>{this.props.castDate(post.timestamp)}</span></div>
                        </div>
                    </div>
                    <p className="card-text">{post.body}</p>
                </div>
                <div className="card-footer">
                    <div className="list-inline text-muted">
                        <DeleteEdit postId={post.id} onDeletePost={this.handleAction} position={"float-right"}/>
                        <VoteSection value={post} changeVote={this.handleVote} position={""} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetail