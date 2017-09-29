import { REQUEST_POSTS } from '../actions'

const initialPostListState = {
    posts: {
        isFetching: false,
        postItems: ["hola mundo", "hola hans"]
    }
}

function postList (state = initialPostListState, action){
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        default:
            return state
    }
}

export default postList

