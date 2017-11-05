import React, { Component } from 'react'
import { Link, Redirect, history, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'
import { changeVoteOnPostList, onDeletePost, fetchSinglePost, setEditMode } from '../../actions'
import VoteSection from '../common/VoteSection'
import DeleteEdit from '../common/DeleteEdit'


class PostCard extends Component{

    castDate = (unformatt) => {
        const date = new Date(unformatt);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    componentDidMount(){
        this.props.setEditMode({
            onEdit: false,
            postId: ""
        })
    }

    onHandleVote = (post, score) => {
        const index = this.props.posts.indexOf(post)
        this.props.changeVote(post.id, score, index)
    }

    handleAction = (postId, type) => {
        console.log(postId, type)
        if( type === "delete" ){
            this.props.onDeletePost(postId)
        }
        else 
        if( type === "edit"){
            this.props.history.push(`/on/edit/${postId}`);
            /*this.props.setEditMode({
                onEdit: true,
                postId: postId
            })*/
        }
    }

    render(){
        let { posts, filterBy, category, edit } = this.props
        if (edit.onEdit) {
            return <Redirect to={`/on/edit/${edit.postId}`}/>;
        }
        
        let postList = []
        if(category !== undefined){
            if(category.length > 0){
                const match = new RegExp(escapeRegExp(category), 'i');
                postList = posts.filter((p) => match.test(p.category))
            }
        }else{
            postList = posts
        }

        if(postList.length > 0){
            for(let filter of filterBy){
                if(filter.value.length > 0){
                    postList.sort(sortBy(filter.value))
                }
            }
        }

        return (             
                <div className="card-deck">
                    {postList.length > 0 ? (
                        postList.map( ( post ) => (
                            <div key={ post.id } className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <Link to={`/${post.category}/${post.id}`} >{post.title}</Link>
                                    </h4>
                                    <div className="card-text">
                                        <div className="list-inline card-subtitle mb-2 text-muted">
                                            <div className="mr-2 list-inline-item font-italic">by: <small className="">{post.author}</small></div>
                                            <div className="mr-2 list-inline-item font-italic">comments: <small className="">{post.commentCount}</small></div>
                                        </div>
                                    </div>
                                    <p className="card-text">{post.body}</p>
                                </div>
                                <div className="card-footer text-muted list-inline">
                                    <VoteSection value={post} position={""} changeVote={this.onHandleVote}/>
                                    <DeleteEdit handleAction={this.handleAction} id={post.id} position="float-right"/>
                                </div>
                            </div>
                            ))
                    ) : (
                        <div className="card text-center">
                            <div className="card-body">
                                <h2>There is no post to show</h2>
                            </div>
                        </div>
                    )}
                </div>
        )
    }
}



function mapStateToProps ( state ) {
    console.log(state)
    return { 
        posts: state.init.postItems,
        filterBy: state.init.filterBy,
        edit: state.post.edit
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        changeVote: (id, score, index) => dispatch((changeVoteOnPostList(id, score, index))),
        onDeletePost: (postId) => dispatch((onDeletePost(postId))),
        setPostDetail: (id) => dispatch(fetchSinglePost(id)),
        setEditMode: (edit) => dispatch(setEditMode(edit))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostCard))