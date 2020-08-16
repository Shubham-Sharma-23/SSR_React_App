import React from "react";
import { Row, Col, Container } from "reactstrap";

import ProgramSection from "../../common/organism/ProgramSection";
import FilterSection from "../../common/organism/FilterSection";
import Heading from "../../common/atoms/Heading";

const Home = () => (
    <Container fluid className="template">
        <Row>
            <Col xs={12}>
                <Heading>SpaceX Launch Programs</Heading>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={3}>
                <FilterSection />
            </Col>
            <Col xs={12} sm={9} className="py-0">
                <ProgramSection />
            </Col>
        </Row>
    </Container>
);

export default Home;
