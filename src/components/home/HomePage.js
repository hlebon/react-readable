import React from 'react'
import { connect } from 'react-redux'
import { getPost } from '../../actions'
import * as ContactsAPI from "../utils/ReadableAPI";
import Categories from './Categories'
import PostList from './PostList'
import NavControl from './NavControl'
import Header from '../common/Header'

class HomePage extends React.Component{


    render(){
        console.log(this.props);
        return (
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <NavControl/>
                        <PostList/>
                        <Categories/>
                    </div>
                </div>
            </div>
        )

    }
}

function mapStateToProps ( state ) {
    return { 
        nombre: "Hans",
        posts: state.posts.postItems
    }
}


export default connect(mapStateToProps)(HomePage)
