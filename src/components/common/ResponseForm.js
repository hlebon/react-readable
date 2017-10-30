import React, { Component } from 'react'
import serializeForm from 'form-serialize';

class ResponseForm extends Component{
    state = {
        author: "",
        body: ""
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
        //console.log(values);
        this.props.onCreateComment(values);
        this.setState({
            author: "",
            body: ""
        })

    }

    render(){
        return (
            <div className="mb-5 mt-5">
                <h4>Write a response</h4>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input name="author"value={this.state.author} onChange={ e => this.handleInputChange(e)} type="text" className="form-control" placeholder="Author"/>
                    </div>
                    <div className="form-group">
                        <label>Comment</label>
                        <textarea name="body" value={this.state.body}  onChange={ e => this.handleInputChange(e)} className="form-control"></textarea>
                    </div>
                    <button className="btn btn-outline-success">
                        Comment
                    </button>
                </form>
            </div>
        )
    }
}

export default ResponseForm