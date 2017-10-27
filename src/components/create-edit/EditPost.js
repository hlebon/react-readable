import React, { Component } from 'react'

class EditPost extends Component{

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
        

    render(){
        return (
                <form onSubmit={this.handleSubmit} className="col-lg-6">
                    <div>
                        <h1>Edit Post</h1>
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
                            <input name="category" value={this.state.category} onChange={this.handleInputChange}  type="text" className="form-control" placeholder="Categoria"/>
                        </div>
                    </div>
                    <br/>
                    <button className="btn btn-primary">Create</button>
                </form>
        )
    }
}

export default EditPost