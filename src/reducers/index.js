import { REQUEST_POSTS } from '../actions'

const initialPostListState = {
    posts: {
        isFetching: false,
        postItems: ["hola mundo", "hola hans"]
    }
}

function postList (state = initialPostListState, action){
    console.log("Action and state in reducer")
    console.log(action)
    console.log(state)
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state.posts, {
                isFetching: true,
                postItems: action.data
            })
        default:
            return state
    }
}

export default postList

