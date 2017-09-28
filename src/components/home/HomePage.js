import React from 'react'
import Categories from './Categories'
import PostList from './PostList'
import NavControl from './NavControl'
import Header from '../common/Header'
import * as ContactsAPI from "../utils/ReadableAPI";

class HomePage extends React.Component{
    state = {
        posts : []
    }

    componentDidMount(){
        ContactsAPI.getPosts().then((posts) => {
            this.setState({posts : posts})
        })
    }

    render(){
        const posts = this.state.posts;
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <NavControl/>
                        <PostList posts={posts}/>
                        <Categories/>
                    </div>
                </div>
            </div>
        )

    }
}

export default HomePage;