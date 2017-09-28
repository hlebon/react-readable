import { combineReducers } from 'redux'

import {
    VOTE_POST
} from '../actions'

function vote (state = {}, action){
    switch (action.type) {
        case VOTE_POST:
            return Object.assign({}, state, {
                voteScore: action.voteScore
            })

        default:
            return state;
    }
}

export default vote