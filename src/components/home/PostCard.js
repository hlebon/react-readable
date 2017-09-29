import React, { Component } from 'react'

class PostCard extends Component{
    render(){
        const posts = this.props.posts
        return (
            <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"></h4>
                            <p className="card-text"></p>
                            
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