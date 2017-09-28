import React, { Component } from 'react'
import PostCard from './PostCard'
import NavControl from './NavControl'

class PostList extends Component{
    render(){
        return(
            <div className="col-lg-8">
                <NavControl/>
                <div className="card-columns">
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </div>
            </div>
        )
    }
}

export default PostList