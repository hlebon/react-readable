import React from 'react'
import { connect } from 'react-redux'
import { requestPost, requestCategories } from '../../actions'
import * as ContactsAPI from "../utils/ReadableAPI";
import PostList from '../common/PostList'
import NavControl from '../common/NavControl'

class HomePage extends React.Component{

    componentDidMount(){
        ContactsAPI.getPosts().then( (post) => {
            this.props.callGetPost(post)
        });

        ContactsAPI.getCategories().then( (data) => {
            this.props.callGetCategories(data.categories);
        } )
    }

    render(){
        return (
        <div className="col-lg-10">
            <div className="d-flex justify-content-between">
                <NavControl/>
                <PostList/>
            </div>
        </div>)

    }
}

function mapStateToProps ( state ) {
    console.log(state)
    return { 
        posts: state.postItems,
        categories: state.categories
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        callGetPost: (data) => dispatch((requestPost(data))),
        callGetCategories: (data) => dispatch((requestCategories(data)))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
