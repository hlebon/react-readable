import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VoteSection from '../common/VoteSection'
import DeleteEdit from '../common/DeleteEdit'
import { changeVote } from '../../actions'
import { connect } from 'react-redux'



class PostCard extends Component{
    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    onHandleVote = (post, score) => {
        console.log(post, score)
        this.props.onHandleVote(post, score)
    }

    render(){
        console.log(this.props)
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
                                            <div className="mr-2 list-inline-item font-italic">by: <small className="">{post.author}</small></div>
                                            <div className="mr-2 list-inline-item font-italic">comments: <small className="">{post.commentCount}</small></div>
                                        </div>
                                    </div>
                                    <p className="card-text">{post.body}</p>
                                </div>
                                <div className="card-footer text-muted list-inline">
                                    <VoteSection value={post} position={""} changeVote={this.onHandleVote}/>
                                    <DeleteEdit position="float-right"/>
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