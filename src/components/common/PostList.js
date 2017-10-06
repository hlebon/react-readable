import React, { Component } from 'react'
import PostCard from '../home/PostCard'


class PostList extends Component{
    render(){
        console.log(this.props)
        return(
                <PostCard/>
        )
    }
}

export default PostList