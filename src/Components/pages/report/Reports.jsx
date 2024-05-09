import React from "react";
import './report.css';

const Settings = () => {
    return (
        <div className="reports-div">

            <div className="title-container">
                <h2>Report</h2>
            </div>

            <div className="reports-container">
                <div className="repbutton">
                    <input type="submit" value="Generate Report" className="reportButton" />
                </div>
            </div>

        </div>
    )
}

export default Settings;