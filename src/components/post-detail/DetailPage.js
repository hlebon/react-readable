import React, { Component } from 'react'
import sortBy from 'sort-by'
import { connect } from 'react-redux'
import { fetchSinglePost, fetchComments, changeVote, voteAComment } from '../../actions'
import VoteSection from '../common/VoteSection'
import Comments from '../common/Comments'
import DeleteEdit from '../common/DeleteEdit'
import ResponseForm from '../common/ResponseForm'
import DetailPost from './DetailPost'

class DetailPage extends Component{

    componentDidMount(){
        this.props.setSinglePost(this.props.postId)
        this.props.fetchComments(this.props.postId)
    }

    voteApost = (post, score) => {
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
                <div className="col-lg-10">
                    <DetailPost castDate={this.castDate} post={post} voteAPost={this.voteApost}/>
                    <ResponseForm/>
                    {comments.length > 0 && (
                        <Comments comments={comments} castDate={this.castDate}/>
                    )}
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