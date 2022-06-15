import * as types from "./action-types"
import { combineReducers } from "redux"

const initialForm = { selected: "" }
function form(state = initialForm, action){
    switch(action.type){
        case types.SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        default: return state;
    }
}

const initialDisplay = { activity: {}, display: false }
function display(state = initialDisplay, action){
    switch(action.type){
        case types.SET_DISPLAY:
            return {
                ...state,
                activity: action.payload
            }

        case types.DISPLAY_DISPLAY:
            return {
                ...state,
                display: true
            }
        
        default: return state;
    }
}

export default combineReducers({
    form,
    display
});