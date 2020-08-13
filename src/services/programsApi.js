// Launch Success Filter: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true
// Launch & Land Filter:
// https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
// All:
// https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

import axios from "axios";

export const getPrograms = axios.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true");
