import React, { Component } from 'react'
import { connect } from 'react-redux'
import { voteAComment, onDeleteComment, setCommentToUpdate } from '../../actions'
import Modal from 'react-modal'
import VoteSection from './VoteSection'
import DeleteEdit from './DeleteEdit'
import EditForm from './EditForm'

class Comments extends Component{

    state = {
        modalOpen: false
    }

    castDate = (date) => {
        this.props.castDate(date)
    }

    handleAction = (comment, type) => {
        if(type === "delete"){
            this.delete(comment.id)
        }else if(type === "edit"){
            this.edit(comment)
        }
    }

    edit = (comment) => {
        this.props.setCommentToUpdate(comment);
        this.setState(() => ({ modalOpen: true }))
    }

    delete = (id) => {
        this.props.onDeleteComment(id)
    }

    handleVoteComment = (comment, score) =>{
        this.props.voteAcomment(comment.id, score, this.props.comments.indexOf(comment))
    }

    closeModal = () => this.setState(() => ({ modalOpen: false }))

    render(){
        const { comments } = this.props
        const { modalOpen } = this.state

        return(
            <div className="mb-5">
                <div>
                    <h4>Comments</h4>
                </div>
                <div className="list-group">
                    {comments.map((comment)=> (
                        <div key={comment.id} className="component-list mt-2 list-group-item list-group-item flex-column align-items-start">
                            <div className="mb-3 d-flex w-100 justify-content-between">
                                <h5 className="mb-1"><i>{comment.author}</i></h5>
                                <small>{this.castDate(comment.timestamp)}</small>
                            </div>
                            <p className="mb-1">{comment.body}</p>
                            <div className="mt-3 list-inline card-subtitle mb-2 text-muted">
                                <VoteSection  position={""} changeVote={this.handleVoteComment} value={comment}/>
                                <DeleteEdit handleAction={this.handleAction} position="float-right" obj={comment}/>
                            </div>
                        </div>
                    ))}
                </div>
                <Modal 
                    className='rmodal'
                    overlayClassName='overlay'
                    isOpen={modalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel='Modal'
                >
                    <EditForm closeModal={this.closeModal}/>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        comment: state.post.comment
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        voteAcomment: (id, score, comments) => dispatch((voteAComment(id, score, comments))),
        onDeleteComment: (id) => dispatch(onDeleteComment(id)),
        setCommentToUpdate: (edit) => dispatch(setCommentToUpdate(edit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)