import React, { Component } from 'react'
import PostCard from './PostCard'
import { connect } from 'react-redux'
import * as ContactsAPI from '../utils/ReadableAPI'

class PostList extends Component{

    render(){
        console.log(this.props)
        return(
            <div className="col-lg-8">
                <PostCard posts={this.props.posts}/>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    return { 
        posts: state.postItems,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps)(PostList)