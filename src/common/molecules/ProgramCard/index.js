import React from "react";
import { Title, Info, CardImage } from "../../atoms";
import { toString } from "lodash";

import "./ProgramCard.scss";

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
    <div id={id} className="program-card">
        <div className="card-image-container pb-3">
            <CardImage imageLinkSmall={imageLinkSmall} imageLinkLarge={imageLinkLarge} />
        </div>
        <div className="pt-3">
            <Title>{name}</Title>
        </div>
        <div>
            <Info name="Mission Ids" text={missionIds} />
        </div>
        <div>
            <Info name="Launch Year" text={launchYear} />
        </div>
        <div>
            <Info name="Successful Launch" text={toString(launchSuccess)} />
        </div>
        <div>
            <Info name="Successful Landing" text={toString(landingSuccess)} />
        </div>
    </div>
);

export default ProgramCard;
