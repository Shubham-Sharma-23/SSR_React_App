import { get } from "lodash";

const modelProgramCardData = (apiResponse) =>
    apiResponse.map((program) => ({
        id: get(program, "flight_number", ""),
        name: `${get(program, "mission_name", "")} #${get(program, "flight_number", "")}`,
        launchYear: get(program, "launch_year", ""),
        launchSuccess: get(program, "launch_success", ""),
        missionIds: get(program, "mission_id", []),
        landingSuccess: get(program, "rocket.first_stage.cores[0].land_success", ""),
        imageLinkLarge: get(program, "links.mission_patch", ""),
        imageLinkSmall: get(program, "links.mission_patch_small", ""),
    }));

export default modelProgramCardData;
