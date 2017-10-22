import React, { Component } from 'react'
import VoteSection from './VoteSection'
import DeleteEdit from './DeleteEdit'

class Comments extends Component{
    castDate = (date) => {
        this.props.castDate(date)
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
                                <VoteSection  position={""} onHandleVote={this.handleVoteComment} value={comment}/>
                                <DeleteEdit position="float-right"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Comments