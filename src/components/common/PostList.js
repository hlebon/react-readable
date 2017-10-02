import React, { Component } from 'react'
import PostCard from '../home/PostCard'


class PostList extends Component{

    render(){
        console.log(this.props)
        return(
            <div className="col-lg-10">
                <PostCard/>
            </div>
        )
    }
}

export default PostList