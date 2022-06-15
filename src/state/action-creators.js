import * as types from "./action-types"
import axios from "axios"

export const setSelected = (selected) => {
    return { type: types.SET_SELECTED, payload: selected }
}

export const getDisplay = (type) => {
    return function(dispatch){
        axios.get(`http://www.boredapi.com/api/activity?type=${type}`)
            .then(res => {
                dispatch({ type: types.SET_DISPLAY, payload: res.data });
                dispatch({ type: types.DISPLAY_DISPLAY })
            })
            .catch(err => {
                debugger
            })
    }
}