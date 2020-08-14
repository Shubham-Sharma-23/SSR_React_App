import React from "react";
import PropTypes from "prop-types";
import "./SubTitle.scss";

const SubTitle = ({ children }) => <span className="sub-title">{children}</span>;

export default SubTitle;

SubTitle.propTypes = {
    children: PropTypes.string,
};

SubTitle.defaultProps = {
    children: "",
};
