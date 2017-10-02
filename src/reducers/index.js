import { REQUEST_POSTS, REQUEST_CATEGORY } from '../actions'


const initialPostListState = {
    isFetching : false,
    postItems: [],
    categories: []
    
}

function requestFromServer (state = initialPostListState, action){
    console.log("Action and state in reducer")
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
            } )
        default:
            return state
    }
}

export default requestFromServer

