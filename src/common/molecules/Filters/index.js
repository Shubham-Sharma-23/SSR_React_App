import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";
import PropTypes from "prop-types";
import { Row, Col, Container } from "reactstrap";

import { SubTitle } from "../../atoms";
import FilterButton from "../../atoms/FilterButton";
import "./Filters.scss";

const Filters = ({ filterData, onChange }) => {
    const { filterId } = filterData;
    const onFilterChange = useCallback(
        (e, value) => {
            onChange(filterId, value);
        },
        [onChange, filterId]
    );

    return (
        <Container fluid className="filter-values">
            <Row>
                <Col xs={12}>
                    <SubTitle>{get(filterData, "filterName", "")}</SubTitle>
                </Col>
            </Row>
            <Row>
                {filterData &&
                    filterData.filterValues &&
                    filterData.filterValues.map((filterValue) => (
                        <Col xs={6} key={filterValue.id} className="filter-button-container">
                            <FilterButton
                                id={filterValue.id}
                                callBack={onFilterChange}
                                value={filterValue.value}
                                selected={filterValue.value === filterData.selectedValue}
                            >
                                {filterValue.value}
                            </FilterButton>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default Filters;

Filters.propTypes = {
    filterData: PropTypes.object.isRequired,
};
