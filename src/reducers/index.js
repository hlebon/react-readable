import { combineReducers } from 'redux'
import { 
    REQUEST_SINGLE_POST, 
    REQUEST_POSTS,
    REQUEST_CATEGORY, 
    REQUEST_COMMENTS,
    CHANGE_VOTE, 
    SORT_POST,
    FILTER_POSTS,
    CHANGE_VOTE_ON_COMMENT,
    CHANGE_VOTE_ON_POST,
    CREATE_POST,
    CREATE_COMMENT,
    DELETE_POST,
    REDIRECT,
    DELETE_COMMENT
} from '../actions'


const initialState = {
    postItems: [],
    categories: [],
    category: ""
}

const initPostCommentState = {
    comments: [],
    singlePost: {},
    redirect: false,
    onEdit: false
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
        case FILTER_POSTS:
            return Object.assign( {}, state, {
                category: action.data
            })
        case CHANGE_VOTE_ON_POST:
            return Object.assign( {}, state, {
                postItems : state.postItems.map( (post, index) => {
                    if(index == action.index){
                         post.voteScore = action.post.voteScore
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

function post (state = initPostCommentState, action){
    console.log(action);
    switch (action.type) {
        case REQUEST_SINGLE_POST:
            return Object.assign( {}, state, {
                singlePost: action.data,
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
                    if(comment.id === action.data.id ){
                        return false
                    }else{
                        return true
                    }
                })
            })
        default:
            return state;
    }
}

export default combineReducers({
    init,
    post
})

