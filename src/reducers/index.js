import { combineReducers } from 'redux'
import { 
    REQUEST_SINGLE_POST, 
    REQUEST_POSTS,
    REQUEST_CATEGORY, 
    REQUEST_COMMENTS,
    CHANGE_VOTE, 
    SORT_POST,
    FILTER_POSTS_BY_CATEGORY,
    CHANGE_VOTE_ON_COMMENT,
    CHANGE_VOTE_ON_POST,
    CREATE_POST,
    CREATE_COMMENT,
    DELETE_POST,
    REDIRECT,
    DELETE_COMMENT,
    FILTER_POSTS_BY_VALUE,
    AFTER_EDIT,
    SET_EDIT_MODE,
    COMMENT_TO_UPDATE
} from '../actions'


const initialState = {
    postItems: [],
    categories: [],
    category: "",
    filterBy: [
        { id: 0, value: "-voteScore" }, 
        { id: 1, value: "" }
    ]
}

const initSinglePostInfo = {
    comments: [],
    post: {},
    comment: {
        id: "",
        author: "",
        body: ""
    }
}

function init (state = initialState, action){
    console.log(action)
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                postItems: action.posts
            })
        case REQUEST_CATEGORY:
            return Object.assign( {}, state, {
                categories: action.data
            })
        case FILTER_POSTS_BY_CATEGORY:
            return Object.assign( {}, state, {
                category: action.data
            })
        case FILTER_POSTS_BY_VALUE:
            return Object.assign( {}, state, {
                filterBy: state.filterBy.map((filter, index) => {
                    if(index === action.filter.id){
                        filter.value = action.filter.value
                    }
                    return filter;
                } )
            } )
        case CHANGE_VOTE_ON_POST:
            return Object.assign( {}, state, {
                postItems : state.postItems.map( (post, index) => {
                    if(index == action.index){
                         post.voteScore = action.post.voteScore
                    }
                    return post
                })
            })
        case AFTER_EDIT:
            return Object.assign({}, state, {
                postItems: state.postItems.map( ( post, index ) => {
                    if(post.id === action.post.id){
                        post.body = action.post.body,
                        post.title = action.post.title
                    }
                    return post
                })
            })
        case CREATE_POST:
            return Object.assign( {}, state, {
                postItems: state.postItems.concat([action.data])
            })
        default:
            return state
    }
}

function post (state = initSinglePostInfo, action){
    console.log(action);
    switch (action.type) {
        case REQUEST_SINGLE_POST:
            return Object.assign( {}, state, {
                post: action.data,
                redirect: action.redirect
            })
        case REQUEST_COMMENTS:
            return Object.assign( {}, state, {
                comments: action.data
            })
        case CHANGE_VOTE_ON_COMMENT:
            return Object.assign( {}, state, {
                comments : state.comments.map( (comment, index) => {
                if(index == action.index){
                    comment.voteScore = action.comment.voteScore
                }
                return comment
            })
        })
        case CREATE_COMMENT: 
            return Object.assign({}, state, {
                comments: state.comments.concat([action.data])
            })
        case REDIRECT:
            return Object.assign({}, state, {
                redirect: action.data
            })
        case DELETE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter( (comment) => {
                    if(comment.id === action.commentId ){
                        return false
                    }else{
                        return true
                    }
                })
            })
        case COMMENT_TO_UPDATE:
            return {
                ...state,
                comment: {
                    ...state.comment,
                    id: action.comment.id,
                    author: action.comment.author,
                    body: action.comment.body
                }
            }
        default:
            return state;
    }
}

export default combineReducers({
    init,
    post
})

