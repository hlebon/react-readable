import React, { Component } from 'react'
import { connect } from 'react-redux'
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import PostCard from '../home/PostCard'
import Categories from '../common/Categories'
import NavControl from '../common/NavControl'
import { changeVoteOnPostList } from '../../actions'



class PostList extends Component{
    state = {
        filterBy: '-voteScore'
    }

    onHandleVote = (post, score) => {
        const index = this.props.posts.indexOf(post)
        this.props.changeVote(post.id, score, index)
    }

    onChangeSort = (data) => {
        this.setState({
            filterBy: data
        })
    }


    render(){
        const { category, posts, categories } = this.props
        console.log(this.props);

        let postList
        if(typeof(category) !== 'undefined'){
            const match = new RegExp(escapeRegExp(category), 'i');
            postList = posts.filter((p) => match.test(p.category))
        }else{
            postList = posts;
        }

        if(postList) {
            postList.sort(sortBy(`${this.state.filterBy}`));
        }

        return(
            <div className="row">
                <div className="col-lg-2">
                    <NavControl onChangeSort={this.onChangeSort}/>    
                </div>
                <div className="col-lg-8">
                    <PostCard postList={postList} onHandleVote={this.onHandleVote}/>
                </div>
                <div className="col-lg-2">
                    <Categories categories={categories}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    console.log(state)
    return { 
        posts: state.init.postItems,
        categories: state.init.categories
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        changeVote: (id, score, index) => dispatch((changeVoteOnPostList(id, score, index)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)