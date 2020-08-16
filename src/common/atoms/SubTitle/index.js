import React from "react";
import PropTypes from "prop-types";
import "./SubTitle.scss";

const SubTitle = ({ children }) => <div className="sub-title">{children}</div>;

export default SubTitle;

SubTitle.propTypes = {
    children: PropTypes.string,
};

SubTitle.defaultProps = {
    children: "",
};
