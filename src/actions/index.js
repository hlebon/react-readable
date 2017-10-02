export const REQUEST_POSTS = "REQUEST_POSTS"
export const REQUEST_CATEGORY = "REQUEST_CATEGORY"

export function requestPost( data ) {
    console.log("data in action")
    console.log(data)
    return {
        type: REQUEST_POSTS,
        data
    }
}

export function requestCategories ( data ) {
    console.log(data)
    return {
        type: REQUEST_CATEGORY,
        data
    }
}