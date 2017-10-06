import React from 'react'
import { connect } from 'react-redux'
import { requestPost, requestCategories } from '../../actions'
import PostList from '../common/PostList'
import PostCard from './PostCard'
import NavControl from '../common/NavControl'
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";


class HomePage extends React.Component{
    render(){

        const { category, posts } = this.props
        const postItems = this.props.posts
        console.log(posts)

        console.log(typeof(category) !== undefined);

        let postList
        if(!category){
            const match = new RegExp(escapeRegExp(category), 'i');
            postList = posts.filter((p) => match.test(p.category))
        }else{
            postList = postList;
        }

        postList.sort(sortBy('name'));

        console.log(postList)
        console.log(this.props.category)
        
        return (
            <div className="d-flex justify-content-between">
                <NavControl/>
                <PostCard postList={this.props}/>
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
