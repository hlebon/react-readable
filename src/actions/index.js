export const VOTE_POST = "VOTE_POST"

export default function votePost ({id, voteScore}){
    return {
        type: VOTE_POST,
        id,
        voteScore
    }
}