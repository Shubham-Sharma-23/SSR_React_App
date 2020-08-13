import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FilterButton = ({ children, callBack, value, selected, id }) => {
    return (
        <button id={id} className={classNames("button", { selected: selected })} onClick={(e) => callBack(e, value)}>
            {children}
        </button>
    );
};

export default FilterButton;

FilterButton.propTypes = {
    children: PropTypes.string,
    callBack: PropTypes.func,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    id: PropTypes.string.isRequired,
};

FilterButton.defaultProps = {
    text: "",
    callBack: () => console.log("value", value),
    selected: false,
};
