import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { fetchSinglePost, onUpdatePost, setEditMode } from '../../actions'
import  serializeForm  from 'form-serialize'

class EditPost extends Component{

    state = {
        title: "",
        body: "",
        author: "",
        category: "",
        empty: true
    }

    componentDidMount = () => {
        const id = this.props.postId
        this.props.setPostDetail(id)
        this.props.setEditMode({
            onEdit: false,
            postId: ""
        })
    }

    guid = () => {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })  
    }

    updatePost = (id, post) => {
        this.props.updatePost(id, post)
    }

    handleSubmit(id, e) {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        this.props.updatePost(id, values)
        this.props.history.push("/");
      }
        

    render(){
        const { post, categories } = this.props
        console.log(post.title)
        return (
                <form onSubmit={(event) => this.handleSubmit(post.id, event)} className="col-lg-6">
                    <div>
                        <h1>Edit Post</h1>
                    </div>
                    <div key={post.title} className="form-group">
                        <label className="col-form-label">Post Title</label>
                        <input type="text" name="title" defaultValue={post.title || ''}  ref={(input) => this.input = input} type="text" className="form-control" placeholder="Title"/>
                    </div>
                    <div key={post.body} className="form-group">
                        <label className="col-form-label">Body</label>
                        <textarea name="body" defaultValue={post.body} ref={(input) => this.input = input} className="form-control"></textarea>
                    </div>
                    <div className="form-row">  
                        <div key={post.author} className="col">
                            <label><strong>Author</strong></label>
                            <p>{post.author}</p>
                        </div>
                        <div key={post.category} className="col">
                            <strong>Category</strong>
                            <p>{post.category}</p>
                        </div>

                    </div>
                    <br/>
                    <button className="btn btn-primary">Update</button>
                </form>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        post: state.post.post,
        categories: state.init.categories
    }
}

function dispatchStateToProps(dispatch){
    return {
        setPostDetail: (id) => dispatch(fetchSinglePost(id)),
        updatePost: (id, body) => dispatch(onUpdatePost(id, body)),
        setEditMode: (edit) => dispatch(setEditMode(edit))
        
    }
}


export default connect(mapStateToProps, dispatchStateToProps)(withRouter(EditPost))