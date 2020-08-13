import React from "react";
import { SubTitle } from "../../atoms";
import { Row, Col, Container } from "reactstrap";
import PropTypes from "prop-types";
import FilterButton from "../../atoms/FilterButton";
import { get } from "lodash";

const Filters = ({ filterData }) => (
    <Container fluid>
        {console.log("filterData", filterData)}
        <Row>
            <Col xs={12}>
                <SubTitle>{get(filterData, "filterName", "")}</SubTitle>
            </Col>
        </Row>
        <Row>
            {filterData.filterValues.map((filterValue) => (
                <Col xs={6}>
                    <FilterButton id={filterValue.id}>{filterValue.value}</FilterButton>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Filters;

Filters.propTypes = {
    filterData: PropTypes.object.isRequired,
};
