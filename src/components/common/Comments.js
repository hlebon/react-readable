import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteAComment, onDeleteComment } from '../../actions'
import VoteSection from './VoteSection'
import DeleteEdit from './DeleteEdit'

class Comments extends Component{
    castDate = (date) => {
        this.props.castDate(date)
    }

    handleAction = (id, type) => {
        if(type === "delete"){
            this.delete(id)
        }else if(type === "edit"){
            this.edit(id)
        }
    }

    edit = (id) => {
        console.log(id);
    }

    delete = (id) => {
        console.log(id)
        this.props.onDeleteComment(id)
    }

    handleVoteComment = (comment, score) =>{
        this.props.voteAcomment(comment.id, score, this.props.comments.indexOf(comment))
    }

    render(){
        const { comments } = this.props;
        return(
            <div className="mb-5">
                <div>
                    <h4>Comments</h4>
                </div>
                <div className="list-group">
                    {comments.map((comment)=> (
                        <div key={comment.id} className="mt-2 list-group-item list-group-item flex-column align-items-start">
                            <div className="mb-3 d-flex w-100 justify-content-between">
                                <h6 className="mb-1">{comment.author}</h6>
                                <small>{this.castDate(comment.timestamp)}</small>
                            </div>
                            <p className="mb-1">{comment.body}</p>
                            <div className="mt-3 list-inline card-subtitle mb-2 text-muted">
                                <VoteSection  position={""} changeVote={this.handleVoteComment} value={comment}/>
                                <DeleteEdit onDelete={this.handleAction} position="float-right" id={comment.id}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        voteAcomment: (id, score, comments) => dispatch((voteAComment(id, score, comments))),
        onDeleteComment: (id) => dispatch(onDeleteComment(id))
    }
}

export default connect(null, mapDispatchToProps)(Comments)