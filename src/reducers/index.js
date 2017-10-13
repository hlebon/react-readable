import { combineReducers } from 'redux'
import { 
    REQUEST_SINGLE_POST, 
    REQUEST_POSTS,
    REQUEST_CATEGORY, 
    CHANGE_VOTE, 
    SORT_POST,
    FILTER_POSTS
} from '../actions'


const initialState = {
    orderBy: "-voteScore",
    postItems: [],
    categories: [],
    category: ""
}

const initPostCommentState = {
    comments: [],
    post: {},
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
        
        case CHANGE_VOTE:
            return Object.assign( {}, state,  {
                postItems: action.data
            })
        default:
            return state
    }
}

function post (state = initPostCommentState, action){
    switch (action.type) {
        case REQUEST_SINGLE_POST:
            return Object.assign( {}, state, {
                post: action.data
            })
        default:
            return state;
    }
}

export default combineReducers({
    init,
    post
})

