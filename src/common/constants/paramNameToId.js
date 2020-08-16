import { get } from "lodash";

const filterParamToFilterId = {
    launch_year: "f1",
    launch_success: "f2",
    land_success: "f3",
};

export default (paramName) => get(filterParamToFilterId, `${paramName}`, -1);
