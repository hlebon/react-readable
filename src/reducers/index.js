import { REQUEST_POSTS, REQUEST_CATEGORY, CHANGE_VOTE } from '../actions'


const initialPostListState = {
    isFetching : false,
    postItems: [],
    categories: [],
}

function requestFromServer (state = initialPostListState, action){
    console.log(action)
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                postItems: action.data
            })
        case REQUEST_CATEGORY:
            return Object.assign( {}, state, {
                categories: action.data
            })
        case CHANGE_VOTE:
            return Object.assign( {}, state,  {
                postItems: action.data
            })
        default:
            return state
    }
}

export default requestFromServer

