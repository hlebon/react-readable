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
        this.setState({ postItems: this.props.posts })
        console.log(this.state.postItems)
    }

    handleVote = (postId, score) => {
        ReadableAPI.votePost(postId, score).then( (val) => {
            this.props.changeVote(val)
        });
    }




    render(){
        const { category, posts } = this.props
        const postItems = this.props.posts

        let postList
        if(typeof(category) !== 'undefined'){
            const match = new RegExp(escapeRegExp(category), 'i');
            postList = posts.filter((p) => match.test(p.category))
        }else{
            postList = posts;
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
        changeVote: (data) => dispatch((changeVote(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
