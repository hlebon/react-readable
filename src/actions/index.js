import * as ContactsAPI from "../components/utils/ReadableAPI";

export const REQUEST_POSTS = "REQUEST_POSTS"

export function requestPost( data ) {
    console.log("data in action")
    console.log(data)
    return {
        type: "REQUEST_POSTS",
        data
    }
}

function fetchPosts(){
    return dispatch => {
        dispatch(requestPost())
        const posts = ContactsAPI.getPosts.then( posts => posts )
        console.log(posts);
        return posts;
    }
}