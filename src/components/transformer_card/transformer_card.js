import React from "react";
import "./transformer_card.css";

const TransformerCard = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
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
    </div>
);

export default TransformerCard;