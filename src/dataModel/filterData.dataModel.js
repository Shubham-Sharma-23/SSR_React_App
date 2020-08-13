import { get } from "lodash";
import filterMockJson from "../common/constants/filterMockJson";

const filterDefaultData = (apiResponse) =>
    apiResponse.map((filter) => {
        const filterTemp = filter;
        filterTemp.filterValues = filterTemp.filterValues.map((filterItem) => ({ ...filterItem, selected: false }));
        return filterTemp;
    });

export default filterDefaultData;
