import React from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function Form(props) {

    const handleSelect = event => {
        props.setSelected(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.getDisplay(props.form.selected);
    }

    return (
        <div>
            <form className="form">
                <label htmlFor="activity-type">What type of activity are you in the mood for?</label>
                <select name="activity-type" onChange={handleSelect}>
                    <option value="">-- Select a Type --</option>
                    <option value="education">Educational</option>
                    <option value="recreational">Recreational</option>
                    <option value="social">Social</option>
                    <option value="diy">Do It Yourself Project</option>
                    <option value="charity">Charity</option>
                    <option value="cooking">Cooking</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="music">Musical</option>
                    <option value="busywork">Busywork</option>
                </select>
                <button onClick={e => handleSubmit(e)}>Get Activity!</button>
            </form>
        </div>
    )
}

export default connect(state => state, actions)(Form);