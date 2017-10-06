import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostCard extends Component{
    render(){
        const { postList } = this.props
        return (             
                <div className="card-deck">
                    {postList.map( ( post ) => (
                    <div key={ post.id } className="card">
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <Link to="/detail">Detalle</Link>
                            <p className="card-text">{post.body}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-secondary">up</button>
                            <button type="button" className="btn btn-primary">down</button>
                        </div>
                    </div>
                    ))}
                </div>
        )
    }
}

export default PostCard