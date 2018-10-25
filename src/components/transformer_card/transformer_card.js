import React from "react";
import "./transformer_card.css";

const TransformerCard = props => (
    <div className="card" id={props.affiliation} onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
            </ul>
        </div>
    </div>
);

export default TransformerCard;