import React from "react";
import "./transformer_card.css";

const TransformerCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Role:</strong> {props.role}
                </li>
                <li>
                    <strong>Alt Mode:</strong> {props.altmode}
                </li>
            </ul>
        </div>
        {/* won't need below code, most likely */}
        {/* consider using this to control handle on click function */}
        <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
        </span>
    </div>
);

export default TransformerCard;