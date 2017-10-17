import * as ReadableAPI from '../components/utils/ReadableAPI'

export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POST"
export const REQUEST_SINGLE_POST = "REQUEST_SINGLE_POST"
export const REQUEST_CATEGORY = "REQUEST_CATEGORY"
export const CHANGE_VOTE = "CHANGE_VOTE"
export const SORT_BY = "SORT_BY"
export const FILTER_POSTS = "FILTER_POSTS"

//#region request-posts
export function requestPosts( data ) {
    return {
        type: REQUEST_POSTS,
        posts: data
    }
}

export function fetchPosts(){
    return function(dispatch){
        return ReadableAPI.getPosts().then( (post) => {
            dispatch(requestPosts(post))
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

export function fetchSinglePost( data ){
    console.log(data);
    return function(dispatch){
        return ReadableAPI.getPostsDetails(data).then( ( data ) =>{
            console.log(data);
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



export function filterPosts( data ) {
    return {
        type: FILTER_POSTS,
        data
    }
}



export function changeVote( data ) {
    return {
        type: CHANGE_VOTE,
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
