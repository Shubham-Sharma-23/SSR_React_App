import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./FilterButton.scss";

const FilterButton = ({ children, callBack, value, selected, id }) => {
    return (
        <button
            id={id}
            className={classNames("filter-button", { selected: selected })}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                callBack(e, value);
            }}
            type="button"
        >
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
