import React from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function Display(props){
    const { activity, display } = props.display;

    const displayText = `Today you should ${display && activity.activity.toLowerCase()}! You will need ${activity.participants} ${ activity.participants === 1 ? "person" : "people" } and it will cost ${activity.price} arbitrary units.`

    return (
        <div className="display-container">
            { display ? <p>{displayText}</p> : <h3>Use form below</h3> }
        </div>
    )
}

export default connect(state => state, actions)(Display);