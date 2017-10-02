import React, { Component } from 'react'

class PostCard extends Component{
    render(){
        return (
            <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Titulo</h4>
                            <p className="card-text">Body</p>
                            
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-secondary">up</button>
                            <button type="button" className="btn btn-primary">down</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default PostCard