import React from "react";
import "./title.css";

const Title = props => (

    <div className="title">
    
        <h1 className="pageTitle">{props.children}</h1>
        <h4 className="scores">
            Score: {props.score}  High Score: {props.highscore}
        </h4>

    </div>

);

export default Title;