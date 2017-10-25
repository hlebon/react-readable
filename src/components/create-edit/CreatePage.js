import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onCreatePost } from '../../actions'
import * as ReadableAPI from '../utils/ReadableAPI'
import serializeForm from 'form-serialize';

class CreatePage extends Component{

    state = {
        title: "",
        body: "",
        author: "",
        category: ""
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

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true })
        values.id = this.guid();
        values.timestamp = Date.now();
        console.log(values);
        //this.props.createPost(values);
    }
    
    render(){
        const { categories } = this.props;
        return (
                <form onSubmit={this.handleSubmit} className="col-lg-6">
                    <div>
                        <h1>Create Post</h1>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Post Title</label>
                        <input name="title" value={this.state.title} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Body</label>
                        <textarea name="body" value={this.state.body} onChange={this.handleInputChange} className="form-control"></textarea>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input name="author" value={this.state.author} onChange={this.handleInputChange}  type="text" className="form-control" placeholder="Author"/>
                        </div>
                        <div className="col">
                            <select name="category" value={this.state.category} onChange={this.handleInputChange} className="custom-select">
                                {categories.map( category => (
                                    <option key={category.name} value={category.name}>{category.name}</option>    
                                ))}
                            </select>
                        </div>
                    </div>
                    <br/>
                    <button className="btn btn-primary float-right">Create</button>
                </form>
        )
    }
}

function mapStateToProps(state){
    return {
        categories: state.init.categories
    }
}

function mapDispatchToProps(dispatch){
    return {
        createPost: (post) => dispatch((onCreatePost(post)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)