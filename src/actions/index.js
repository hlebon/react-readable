import * as ReadableAPI from '../components/utils/ReadableAPI'

export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POST"
export const REQUEST_SINGLE_POST = "REQUEST_SINGLE_POST"
export const CHANGE_VOTE_ON_COMMENT = "CHANGE_VOTE_ON_COMMENT"
export const REQUEST_CATEGORY = "REQUEST_CATEGORY"
export const CHANGE_VOTE = "CHANGE_VOTE"
export const SORT_BY = "SORT_BY"
export const FILTER_POSTS_BY_CATEGORY = "FILTER_POSTS_BY_CATEGORY"
export const FILTER_POSTS_BY_VALUE = "FILTER_POSTS_BY_VALUE"
export const REQUEST_COMMENTS = "REQUEST_COMMENTS"
export const CHANGE_VOTE_ON_POST = "CHANGE_VOTE_ON_POST" // 
export const CREATE_POST = "CREATE_POST"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const DELETE_POST = "DELETE_POST"
export const REDIRECT = "REDIRECT"
export const DELETE_COMMENT = "DELETE_COMMENT"


export function requestPosts( data ) {
    return {
        type: REQUEST_POSTS,
        posts: data
    }
}

export function setRedirectTo( data ) {
    return {
        type: REDIRECT,
        redirect: data
    }
}



export function deleteComment( data ){
    return{
        type: DELETE_COMMENT,
        commentId: data.id
    }
}

export function onDeleteComment( id ){
    return function(dispatch){
        return ReadableAPI.deleteComment(id).then(( resp ) => {
            console.log(resp)
            dispatch(deleteComment(resp))
        })
    }
}



export function fetchPosts(){
    return function(dispatch){
        return ReadableAPI.getPosts().then( (posts) => {
            dispatch(requestPosts(posts))
            dispatch(setRedirectTo(false))
        });
    }
}
//#endregion request-posts

//#region categories
export function requestCategories ( data ) {
    return {
        type: REQUEST_CATEGORY,
        data
    }
}

export function fetchCategories(){
    return function(dispatch){
        return ReadableAPI.getCategories().then( (data) => {
            dispatch(requestCategories(data.categories))
        })
    }
}
//#endregion categories

//#region request-single-post
export function fetchSinglePost( data ){
    return function(dispatch){
        return ReadableAPI.getPostsDetails(data).then( ( data ) =>{
            console.log(data);
            if(Object.getOwnPropertyNames(data).length === 0){
                dispatch(requestSinglePost(data, true))
            }else{
                dispatch(requestSinglePost(data, false))
            }
            
        })
    }
}

export function requestSinglePost( data, redirect ){
    return {
        type: REQUEST_SINGLE_POST,
        data,
        redirect
    }
}
//#endregion request-single-post

//#region requestComments
export function fetchComments( data ){
    return function(dispatch){
        return ReadableAPI.getCommentByPost(data).then((data)=>{
            dispatch(requestComments(data))
        })
    }
}

export function requestComments( data ){
    return {
        type: REQUEST_COMMENTS,
        data
    }
}

//#endregion requestComments

export function changeVote( postId, score ) {
    return function(dispatch){
        return ReadableAPI.votePost(postId, score).then( (postUpdated) => {
            dispatch(requestSinglePost(postUpdated, postUpdated.deleted))
        })
    }
}

export function changeVoteOnPostList( postId, score, index ) {
    return function(dispatch){
        return ReadableAPI.votePost(postId, score).then( (postUpdated) => {
            dispatch(changeVoteOnPost(postUpdated, index))
        })
    }
}

export function voteAComment(commentId, score, index){
    return function(dispatch){
        return ReadableAPI.voteAComment(commentId, score).then( (commentUpdated) => {
            dispatch(changeVoteOnComment(commentUpdated, index))
        })
    }
}

export function changeVoteOnComment(comment, index){
    return {
        type: CHANGE_VOTE_ON_COMMENT,
        comment,
        index
    }
}

export function onCreateAComment(comment){
    return function(dispatch){
        return ReadableAPI.addComment(comment).then((ncomment) => {
            dispatch(createAComment(ncomment))
        })
    }
}

export function deletePost(data){
    return {
        type: DELETE_POST,
        data
    }
}

export function onDeletePost(postId){
    return function(dispatch){
        return ReadableAPI.deletePost(postId).then((post) => {
            console.log(post)
            if(post.deleted){
                dispatch(requestSinglePost({}, post.deleted))
                dispatch(fetchPosts())
            }
        })
    }
}

export function createAComment( data ){
    return {
        type: CREATE_COMMENT,
        data
    }
}

export function changeVoteOnPost(postUpdated, index){
    return {
        type: CHANGE_VOTE_ON_POST,
        post: postUpdated,
        index
    }
}

export function filterPostsByCategory( data ) {
    return {
        type: FILTER_POSTS_BY_CATEGORY,
        data
    }
}

export function filterPostsByValue( filter ){
    console.log(filter);
    return {
        type: FILTER_POSTS_BY_VALUE,
        filter
    }
}

export function changeSortBy( data ) {
    return {
        type: SORT_BY,
        data
    }
}

export function onCreatePost(post){
    return function(dispatch){
        return ReadableAPI.createPost(post).then((npost) => {
            dispatch(createPost(npost))
        })
    }
}

export function createPost( data ){
    return {
        type: CREATE_POST,
        data
    }
}

//
