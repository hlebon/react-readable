import { combineReducers } from 'redux'
import { 
    REQUEST_SINGLE_POST, 
    REQUEST_POSTS,
    REQUEST_CATEGORY, 
    REQUEST_COMMENTS,
    CHANGE_VOTE, 
    SORT_POST,
    FILTER_POSTS,
    REQUEST_SINGLE_COMMENT
} from '../actions'


const initialState = {
    postItems: [],
    categories: [],
    category: ""
}

const initPostCommentState = {
    comments: [],
    singlePost: {},
    onEdit: false
}

function init (state = initialState, action){
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
        default:
            return state
    }
}

function post (state = initPostCommentState, action){
    switch (action.type) {
        case REQUEST_SINGLE_POST:
            return Object.assign( {}, state, {
                singlePost: action.data
            })
        case REQUEST_COMMENTS:
            return Object.assign( {}, state, {
                comments: action.data
            })
        case REQUEST_SINGLE_COMMENT:
            return Object.assign( {}, state, {
                comments: action.comments
            })
        default:
            return state;
    }
}

export default combineReducers({
    init,
    post
})

