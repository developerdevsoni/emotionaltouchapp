import { apiConstants } from "../../constants/appConstants"

const initialState = {
    isLoading: false
}

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case apiConstants.UPDATE_LODING_STATE:
            return {
                ...state,
                isLoading: action.data,
            }
        default:
            return state
    }
}
