import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container } from "reactstrap";

import { fetchPrograms } from "../../../redux/actions";
import modelProgramCardData from "../../../dataModel/programCardData.dataModel";

import ProgramCard from "../../molecules/ProgramCard";

const HomepageTemplate = () => {
    const programs = useSelector((state) => state.programs);
    console.log("programs", programs);
    const dispatch = useDispatch();
    const [programData, setProgramData] = useState(programs);

    // useEffect(() => {
    //     fetchPrograms(dispatch);
    //     return () => {};
    // }, []);

    useEffect(() => {
        console.log("programs", programs);
        setProgramData(modelProgramCardData(programs));
    }, [programs]);

    return (
        <Container fluid className="programs">
            <Row>
                {programData.map((item) => (
                    <Col xs={12} sm={6} md={3}>
                        <ProgramCard {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomepageTemplate;
