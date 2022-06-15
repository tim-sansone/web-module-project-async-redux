import * as types from "./action-types"

export const setSelected = (selected) => {
    return { type: SET_SELECTED, payload: selected }
}

export const setDisplay = (activity) => {
    return { type: SET_DISPLAY, payload: activity}
}