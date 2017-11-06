import React, { Component } from 'react'
import sortBy from 'sort-by'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { fetchSinglePost, fetchComments, changeVote, voteAComment, onCreateAComment, onDeletePost } from '../../actions'
import VoteSection from '../common/VoteSection'
import Comments from '../common/Comments'
import DeleteEdit from '../common/DeleteEdit'
import ResponseForm from '../common/ResponseForm'
import DetailPost from './DetailPost'

const history = createHistory()

class DetailPage extends Component{
    state = {
        onEditMode : false
    }

    componentDidMount(){
        this.props.setSinglePost(this.props.postId)
        this.props.fetchComments(this.props.postId)
    }

    voteApost = (post, score) => {
        this.props.changeVote(post.id, score)
    }

    createComment = (values) => {
        values.parentId = this.props.post.id
        this.props.onCreateAComment(values);
    }

    handleAction = (obj, type) => {
        if(type === "delete"){
            this.deletePost(obj.id);
        }else if(type === "edit"){
            this.editPost(obj.id)
        } 
    }

    deletePost = (postId) => {
        this.props.onDeletePost(postId);
        this.props.history.push(`/`)
    }

    editPost = (postId) => {
        this.props.history.push(`/on/edit/${postId}`)
    }

    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    render(){
        const { post, comments, comment } = this.props;
        comments.sort(sortBy("-voteScore"));

        return (
            <div className="d-flex justify-content-center">
                <div className="col-lg-10">
                    <DetailPost onHandleActions={this.handleAction} castDate={this.castDate} post={post} voteAPost={this.voteApost}/>
                    <ResponseForm onCreateComment={this.createComment}/>
                    {comments.length > 0 && (
                        <Comments comments={comments} castDate={this.castDate}/>
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    console.log(state)
    return { 
        post: state.post.post,
        comments: state.post.comments
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        changeVote: (id, score) => dispatch((changeVote(id, score))),
        setSinglePost: (data) => dispatch((fetchSinglePost(data))),
        fetchComments: (data) => dispatch((fetchComments(data))),
        onCreateAComment: (data) => dispatch((onCreateAComment(data))),
        onDeletePost: (postId) => dispatch((onDeletePost(postId)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailPage))