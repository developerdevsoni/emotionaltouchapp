import { apiConstants } from "../../constants/appConstants"

const initialState = {
    allListener: [],
    lastPage: null,
    current_page: 1,
    detail:null
}

export function homeReducer(state = initialState, action) {
    switch (action.type) {

        case apiConstants.API_GET_ALL_LISTENER_SUCCESS:
            console.log('allListener....>>>>', action.result)
            return {
                ...state,
                allListener: action?.result?.data?.listener_list,
                lastPage: action?.result?.data?.lastPage,
                currentPage: action?.result?.data?.current_page,
            }
        case apiConstants.API_GET_LISTENER_DETAIL_SUCCESS:
            console.log('allListenerDEtail....>>>>', action.result)
            return {
                ...state,
                detail: action?.result?.data,
            }
        default:
            return state
    }
}
