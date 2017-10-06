import React from 'react'
import { connect } from 'react-redux'
import { requestPost, requestCategories } from '../../actions'
import PostList from '../common/PostList'
import PostCard from './PostCard'
import NavControl from '../common/NavControl'
import Categories from '../common/Categories'
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";


class HomePage extends React.Component{
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
                    <PostCard postList={postList}/>
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

export default connect(mapStateToProps)(HomePage)
