import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Title, Info, CardImage } from "../../atoms";

const ProgramCard = ({
    id,
    name,
    launchYear,
    launchSuccess,
    missionIds,
    landingSuccess,
    imageLinkLarge,
    imageLinkSmall,
}) => (
    <div id={id}>
        <div>
            <CardImage imageLinkSmall={imageLinkSmall} imageLinkLarge={imageLinkLarge} />
        </div>
        <div>
            <Title>{name}</Title>
        </div>
        <div>
            <Info name="Mission Ids" text={missionIds} />
        </div>
        <div>
            <Info name="Launch Year" text={launchYear} />
        </div>
        <div>
            <Info name="Successful Launch" text={launchSuccess} />
        </div>
        <div>
            <Info name="Successful Landing" text={landingSuccess} />
        </div>
    </div>
);

export default ProgramCard;
