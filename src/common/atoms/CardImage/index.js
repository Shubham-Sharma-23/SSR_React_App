import React from "react";
import PropTypes from "prop-types";

import "./CardImage.scss";

const CardImage = ({ imageLinkSmall, imageLinkLarge }) => (
    <picture className="card-image">
        <source media="(min-width:=1920px)" srcSet={imageLinkLarge} />
        <img src={imageLinkSmall} alt="cardImage" />
    </picture>
);

export default CardImage;
