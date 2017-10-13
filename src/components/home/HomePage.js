//#region import
import React from 'react'
import { connect } from 'react-redux'
import { requestPost, requestCategories, changeVote } from '../../actions'
import PostList from '../common/PostList'
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import * as ReadableAPI from '../utils/ReadableAPI'
import { Link } from 'react-router-dom'

//#endregion import

//#region class definition
class HomePage extends React.Component {
    state = {
        postItems: [],
        filterBy: '-voteScore'
    }

    componentDidMount(){
        console.log("componentDidMount")
        ReadableAPI.getPosts().then( (post) => {
            console.log(post);
            this.setState({ postItems: post })
            this.props.callGetPost(post)
        });

        ReadableAPI.getCategories().then( (data) => {
            console.log(data);
            this.props.callGetCategories(data.categories);
        })
    }

    handleSort = (val, type) => {
        if(val=="+"){
            val = ""
        }

        this.setState({
            filterBy: `${val}${type}`
        })
    }

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
    }


    render(){
        const { category, posts } = this.props
        console.log(category)
        const postItems = this.state.postItems

        let postList
        if(typeof(category) !== 'undefined'){
            const match = new RegExp(escapeRegExp(category), 'i');
            postList = postItems.filter((p) => match.test(p.category))
        }else{
            postList = postItems;
        }

        postList.sort(sortBy(`${this.state.filterBy}`));
        
        return (
            <div className="d-flex flex-column">
                <div className="p-2">
                    <Link to="/create" className="btn btn-primary">Create</Link>
                </div>
                <div className="p-2">
                    <PostList/>
                </div>
            </div>
        )
    }
}

//#endregion class definition

//#region redux-to-props
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

//#endregion redux-to-props

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
