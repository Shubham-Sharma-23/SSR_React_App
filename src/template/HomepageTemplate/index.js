import React from "react";
import ProgramSection from "../../common/organism/ProgramSection";
import FilterSection from "../../common/organism/FilterSection";
import { Row, Col, Container } from "reactstrap";

const Home = () => (
    <Container fluid>
        <Row>
            <Col xs={12} sm={3}>
                <FilterSection />
            </Col>
            <Col xs={12} sm={9}>
                <ProgramSection />
            </Col>
        </Row>
    </Container>
);

export default Home;
