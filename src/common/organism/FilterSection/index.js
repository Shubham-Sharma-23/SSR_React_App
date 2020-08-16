import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateFilter } from "../../../redux/reducers/filter.reducer";
import { updateProgramPerFilter } from "../../../redux/reducers/programs.reducer";
import paramNameToId from "../../constants/paramNameToId";
import SubHeading from "../../atoms/SubHeading";

import Filters from "../../molecules/Filters";
import "./FilterSection.scss";

const FilterSection = () => {
    const dispatch = useDispatch();
    const onFilterChange = useCallback((filterId, selectedValue) => {
        dispatch(
            updateFilter({
                filterId,
                selectedValue,
            })
        );
    }, []);
    const filters = useSelector((state) => state.filters);
    const filtersData = Object.values(filters);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let isActionDispatched = false;

        params.forEach((value, key) => {
            const paramId = paramNameToId(key);
            //TODO: make a bulk filter update
            if (paramId) isActionDispatched = true;
            dispatch(
                updateFilter({
                    filterId: paramId,
                    selectedValue: value,
                })
            );
        });

        if (!isActionDispatched) dispatch(updateProgramPerFilter([]));
    }, []);

    return (
        <div className="filter-section">
            <SubHeading>Filters</SubHeading>
            {filtersData.map((filterItem) => (
                <Filters filterData={filterItem} onChange={onFilterChange} key={filterItem.filterId} />
            ))}
        </div>
    );
};

export default FilterSection;
