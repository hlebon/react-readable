import React, { Component } from "react"
import PostCard from "../home/PostCard"
import Categories from "./Categories"
import NavControl from "./NavControl"


class PostList extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-2">
                    <NavControl/>    
                </div>
                <div className="col-lg-8">
                    <PostCard category={this.props.category}/>
                </div>
                <div className="col-lg-2">
                    <Categories/>
                </div>
            </div>
        )
    }
}

export default PostList