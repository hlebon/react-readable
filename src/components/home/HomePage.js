import React from 'react'
import { connect } from 'react-redux'
import { getPost } from '../../actions'
import * as ContactsAPI from "../utils/ReadableAPI";
import Categories from './Categories'
import PostList from './PostList'
import NavControl from './NavControl'
import Header from '../common/Header'

class HomePage extends React.Component{

    state = {
        posts: []
    }

    componentDidMount(){
        ContactsAPI.getPosts().then((posts) => {
            this.setState({posts})
        })
    }

    votePost = (id, type) => {
        ContactsAPI.votePost(id, {
            option: type
        }).then(contact => {
            console.log("He votado un post")
            console.log(contact)
        })
    }





    render(){
        console.log(this.props);
        const posts = this.state.posts;
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <NavControl/>
                        <PostList posts={posts} votePost = {this.votePost}/>
                        <Categories/>
                    </div>
                </div>
            </div>
        )

    }
}

export default HomePage
