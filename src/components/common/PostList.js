import React, { Component } from 'react'
import { connect } from 'react-redux'
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import PostCard from '../home/PostCard'
import Categories from '../common/Categories'
import NavControl from '../common/NavControl'



class PostList extends Component{
    state = {
        postItems: [],
        filterBy: '-voteScore'
    }

    /*
    handleVote = (post, score) => {
        ReadableAPI.votePost(post.id, score).then( (postUpdated) => {
            const postItem = this.state.postItems;
            const postPosition = postItem.indexOf(post)

            postItem.splice(postPosition, 1)
            postItem.splice(postPosition, 0, postUpdated)

            this.setState({
                postItems: postItem
            });
            this.props.changeVote(this.state.postItems)
        });
    }*/


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
                    <NavControl/>    
                </div>
                <div className="col-lg-8">
                    <PostCard postList={postList}/>
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
        //changeVote: (data) => dispatch((changeVote(data))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)