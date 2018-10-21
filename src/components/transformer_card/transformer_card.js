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
                    <strong>Occupation:</strong> {props.occupation}
                </li>
                <li>
                    <strong>Location:</strong> {props.location}
                </li>
            </ul>
        </div>
        {/* won't need below code, most likely */}
        <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
        </span>
    </div>
);