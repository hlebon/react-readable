import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import PostCard from "../home/PostCard"
import Categories from "../common/Categories"
import NavControl from "../common/NavControl"
import { changeVoteOnPostList, onDeletePost } from "../../actions"



class PostList extends Component{
    state = {
        filterBy: '-voteScore',
        onEditMode: false
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

    onHandleActions = (postId, type) => {
        if(type === "delete"){
            this.onHandleDeletePost(postId);
        }else if(type === "edit"){
            this.setState({
                onEditMode: true
            })
        }
    }

    onHandleDeletePost = (postId, type) => {
        this.props.onDeletePost(postId);
    }


    render(){

        if(this.state.onEditMode){
            return <Redirect exact to='/edit'/>;
        }

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
                    <PostCard postList={postList} handleActions={this.onHandleActions} onHandleVote={this.onHandleVote}/>
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
        changeVote: (id, score, index) => dispatch((changeVoteOnPostList(id, score, index))),
        onDeletePost: (postId) => dispatch((onDeletePost(postId)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)