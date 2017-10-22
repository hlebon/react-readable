import React, { Component } from 'react'


class ResponseForm extends Component{
    render(){
        return (
            <div className="mb-5 mt-5">
                <h4>Write a response</h4>
                <form>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input type="text" className="form-control" placeholder="Usuario"/>
                    </div>
                    <div className="form-group">
                        <label>Comment</label>
                        <textarea className="form-control"></textarea>
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