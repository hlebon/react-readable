import React, { Component } from 'react'
import PostCard from './PostCard'

class PostList extends Component{
    render(){
        return(
            <div className="col-lg-8">
                <PostCard posts={this.props.posts}/>
            </div>
        )
    }
}

export default PostList