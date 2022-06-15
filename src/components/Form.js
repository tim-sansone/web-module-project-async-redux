import React from "react";

function Form(){
    return (
        <div>
            <form>
                <label htmlFor="activity-type">What Type of Activity Do Are You in the Mood For?</label>
                <select name="activity-type">
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
                <button>Get Activity!</button>
            </form>
        </div>
    )
}

export default Form;