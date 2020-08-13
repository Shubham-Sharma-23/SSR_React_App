import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { fetchFilters } from "../../../redux/actions";
import filterDefaultData from "../../../dataModel/filterData.dataModel";

import Filters from "../../molecules/Filters";

const FilterSection = ({ updateSelectedFilters, setDefaultFilters }) => {
    console.log("test");
    const [filtersData, setfiltersData] = useState([]);

    const filters = useSelector((state) => state.filters);
    console.log("filters", filters);
    const dispatch = useDispatch();

    useEffect(() => {
        debugger;
        fetchFilters(dispatch);
        return () => {};
    }, []);

    useEffect(() => {
        setfiltersData(filterDefaultData(filters));
    }, [filters]);

    useEffect(() => {
        console.log("filtersData", filtersData);
    }, [filtersData]);

    // const updateFilters

    return (
        <div className="filter-template">
            {filtersData.map((filterItem) => (
                <Filters filterData={filterItem} />
            ))}
        </div>
    );
};

export default FilterSection;

FilterSection.propTypes = {
    callBack: PropTypes.func.isRequired,
    setDefaultFilters: PropTypes.func,
};

FilterSection.defaultProps = {
    setDefaultFilters: () => {},
    selected: false,
};
