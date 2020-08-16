import React from "react";
import PropTypes from "prop-types";

import "./Heading.scss";

const Heading = ({ children }) => <span className="heading">{children}</span>;

export default Heading;

Heading.propTypes = {
    children: PropTypes.string,
};

Heading.defaultProps = { children: "" };
