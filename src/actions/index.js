import * as ReadableAPI from '../components/utils/ReadableAPI'

export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POST"
export const REQUEST_SINGLE_POST = "REQUEST_SINGLE_POST"
export const REQUEST_SINGLE_COMMENT = "REQUEST_SINGLE_COMMENT"
export const REQUEST_CATEGORY = "REQUEST_CATEGORY"
export const CHANGE_VOTE = "CHANGE_VOTE"
export const SORT_BY = "SORT_BY"
export const FILTER_POSTS = "FILTER_POSTS"
export const REQUEST_COMMENTS = "REQUEST_COMMENTS"

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
            console.log(posts);
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

export function changeVoteOnPostList( postId, score, posts, index ) {
    return function(dispatch){
        return ReadableAPI.votePost(postId, score).then( (postUpdated) => {
            posts.splice(index, 0, postUpdated)
            dispatch(requestPosts(posts))
        })
    }
}

export function voteAComment(comment, score, comments){
    return function(dispatch){
        return ReadableAPI.voteAComment(comment.id, score).then( (commentUpdated) => {
            const position = comments.indexOf(comment)
            comments.splice(position, 1)
            comments.splice(position, 0, commentUpdated)
            dispatch(requestSingleComment(comments))
        })
    }
}

export function requestSingleComment(comments){
    return {
        type: REQUEST_SINGLE_COMMENT,
        comments
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


//
