import * as ReadableAPI from '../components/utils/ReadableAPI'

export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POST"
export const REQUEST_SINGLE_POST = "REQUEST_SINGLE_POST"
export const CHANGE_VOTE_ON_COMMENT = "CHANGE_VOTE_ON_COMMENT"
export const REQUEST_CATEGORY = "REQUEST_CATEGORY"
export const CHANGE_VOTE = "CHANGE_VOTE"
export const SORT_BY = "SORT_BY"
export const FILTER_POSTS = "FILTER_POSTS"
export const REQUEST_COMMENTS = "REQUEST_COMMENTS"
export const CHANGE_VOTE_ON_POST = "CHANGE_VOTE_ON_POST" // 
export const CREATE_POST = "CREATE_POST"

//#region request-posts
export function requestPosts( data ) {
    return {
        type: REQUEST_POSTS,
        posts: data
    }
}

export function fetchPosts(){
    return function(dispatch){
        return ReadableAPI.getPosts().then( (posts) => {
            dispatch(requestPosts(posts))
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
            dispatch(requestSinglePost(data))
        })
    }
}

export function requestSinglePost( data ){
    return {
        type: REQUEST_SINGLE_POST,
        data
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
    console.log(postId, score)
    return function(dispatch){
        return ReadableAPI.votePost(postId, score).then( (postUpdated) => {
            dispatch(requestSinglePost(postUpdated))
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
    console.log(commentId, score, index);
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

export function changeVoteOnPost(postUpdated, index){
    return {
        type: CHANGE_VOTE_ON_POST,
        post: postUpdated,
        index
    }
}



export function filterPosts( data ) {
    return {
        type: FILTER_POSTS,
        data
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
