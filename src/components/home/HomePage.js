import React from 'react'
import { connect } from 'react-redux'
import { requestPost } from '../../actions'
import * as ContactsAPI from "../utils/ReadableAPI";
import Categories from './Categories'
import PostList from './PostList'
import NavControl from './NavControl'
import Header from '../common/Header'

class HomePage extends React.Component{

    state = {
        isFetching: false,
        posts: []
    }

    componentDidMount(){
        ContactsAPI.getPosts().then( (post) => {
            this.props.callGetPost(post)
        })
    }

    render(){
        const posts = this.props.posts
    
        return (
            <div>
                <Header/>
                <span>{this.props.isFetching}</span>
                <br/>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <NavControl/>
                        <PostList posts={this.props.posts}/>
                        <Categories/>
                    </div>
                </div>
            </div>
        )

    }
}

function mapStateToProps ( state ) {
    console.log(state)
    return { 
        posts: state.postItems,
        isFetching: state.isFetching
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        callGetPost: (data) => dispatch((requestPost(data)))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
