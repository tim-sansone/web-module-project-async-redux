import React from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function Display(props){
    const { activity } = props.display;
    
    return (
        <div>
            <p>Activity: {activity.activity}</p>
            <p>Type: {activity.type}</p>
            <p>Number of participants: {activity.participants}</p>
            <p>Cost in arbitrary units: {activity.price}</p>
        </div>
    )
}

export default connect(state => state, actions)(Display);