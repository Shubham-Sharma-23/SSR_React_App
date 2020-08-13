import React from "react";
import PropTypes from "prop-types";

const SubTitle = ({ children }) => <span>{children}</span>;

export default SubTitle;

SubTitle.propTypes = {
    children: PropTypes.string,
};

SubTitle.defaultProps = {
    children: "",
};
