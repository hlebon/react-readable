import React, { Component } from 'react'


class CreatePage extends Component{
    render(){
        return (
                <form className="col-lg-6">
                    <div className="form-group">
                        <label className="col-form-label">Post Title</label>
                        <input type="text" className="form-control" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Body</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Autor"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Categoria"/>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
        )
    }
}

export default CreatePage