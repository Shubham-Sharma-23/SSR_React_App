import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Container } from "reactstrap";

import ProgramCard from "../../molecules/ProgramCard";

import "./ProgramSection.scss";

const ProgramSection = () => {
    const programs = useSelector((state) => state.programs);

    return (
        <Container fluid className="programs">
            <Row>
                {programs.map((item) => (
                    <Col xs={12} sm={6} md={3} className="program-card-container">
                        {console.log("item", item)}
                        <ProgramCard {...item} key={item.id} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProgramSection;
