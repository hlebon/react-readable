import React from 'react'
import { connect } from 'react-redux'
import { requestPost, requestCategories, changeVote } from '../../actions'
import PostCard from './PostCard'
import NavControl from '../common/NavControl'
import Categories from '../common/Categories'
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import * as ReadableAPI from '../utils/ReadableAPI'


class HomePage extends React.Component {
    state = {
        postItems: []
    }

    componentDidMount(){
        ReadableAPI.getPosts().then( (post) => {
            this.setState({ postItems: post })
            this.props.callGetPost(post)
        });

        ReadableAPI.getCategories().then( (data) => {
            this.props.callGetCategories(data.categories);
        })
    }


    handleVote = (post, score) => {
        ReadableAPI.votePost(post.id, score).then( (postUpdated) => {
            const postItem = this.state.postItems;
            const postPosition = postItem.indexOf(post)

            postItem.splice(postPosition, 1)
            postItem.splice(postPosition, 0, postUpdated)

            this.setState(state => ({
                postItems: postItem
            }));
            console.log(this.state.postItems);
            this.props.changeVote(this.state.postItems)
        });
    }


    render(){

        console.log(this.state.postItems)
        console.log(this.props)

        const { category, posts } = this.props
        const postItems = this.state.postItems

        console.log(category)

        let postList
        if(typeof(category) !== 'undefined'){
            const match = new RegExp(escapeRegExp(category), 'i');
            postList = postItems.filter((p) => match.test(p.category))
        }else{
            postList = postItems;
        }

        postList.sort(sortBy('voteScore'));
        return (
            <div className="row">
                <div className="col-lg-2">
                    <NavControl/>
                </div>
                <div className="col-lg-8">
                    <PostCard postList={postList} handleVote={this.handleVote}/>
                </div>
                <div className="col-lg-2">
                    <Categories/>
                </div>
            </div>
        )
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
        changeVote: (data) => dispatch((changeVote(data))),
        callGetPost: (data) => dispatch((requestPost(data))),
        callGetCategories: (data) => dispatch((requestCategories(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
