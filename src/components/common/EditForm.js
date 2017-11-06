import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onUpdateComment } from '../../actions'
import serializeForm from 'form-serialize';

class ResponseForm extends Component{
    state = {
        author: "",
        body: ""
    }

    componentWillMount(){
        console.log(this.props.comment)
        this.setState({
            author: this.props.comment.author,
            body: this.props.comment.body
        })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })  
    }

    closeModal = (e) => {
        e.preventDefault();
        this.props.closeModal();
    }

    

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        const id = this.props.comment.id
        this.props.onUpdateComment(id, values)
        this.setState({
            author: "",
            body: ""
        })
        this.props.closeModal();
    }

    render(){
        console.log(this.props.comment)
        return (
            <div className="mb-5 mt-5">
                <h4>Edit Comment</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input name="author" value={this.state.author} onChange={ e => this.handleInputChange(e)} type="text" className="form-control" placeholder="Author"/>
                    </div>
                    <div className="form-group">
                        <label>Comment</label>
                        <textarea name="body" value={this.state.body}  onChange={ e => this.handleInputChange(e)} className="form-control"></textarea>
                    </div>
                    <button type="submit" className="float-right btn btn-outline-success">
                        Update
                    </button>
                    <button onClick={(e) => this.closeModal(e)} className="btn btn-secondary float-right">Cancel</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        comment: state.post.comment
    }
}

function dispatchStateToProps(dispatch){
    return {
        onUpdateComment: (id, body) => dispatch(onUpdateComment(id, body))
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(ResponseForm)