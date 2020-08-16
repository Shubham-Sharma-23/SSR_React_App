import React from "react";

import "./Info.scss";

const Info = ({ name, text }) => (
    <span className="info">
        <span className="info-name">{name}: </span>
        <span className="info-text">{text}</span>
    </span>
);

export default Info;
