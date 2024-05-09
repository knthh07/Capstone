import React from "react";
import './request.css';

const Requests = () => {
    return (
        <div className="requests-div">
            <div className="reqtitle-container">
                <div className="req-title">
                    <h2>Request</h2>
                </div>
            </div>

            <div className="requests-container">
                <div className="request-card">
                    <input type="submit" id="approve-button" value="Approve" />
                    <input type="submit" id="reject-button" value="Reject" />
                </div>
                <div className="request-card1">
                    <input type="submit" id="approve-button" value="Approve" />
                    <input type="submit" id="reject-button" value="Reject" />
                </div>
                <div className="request-card2">
                    <input type="submit" id="approve-button" value="Approve" />
                    <input type="submit" id="reject-button" value="Reject" />
                </div>
            </div>
        </div>
    );
}

export default Requests;
