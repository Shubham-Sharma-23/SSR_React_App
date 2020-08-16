import axios from "axios";
import { FETCH_PROGRAMS, FETCH_FILTERS } from "../../common/constants/actionTypes";
import filters from "../../common/constants/filterMockJson";
import { getPrograms } from "../../services/programsApi";

// import filterDefaultData from "../../../dataModel/filterData.dataModel";

export const fetchPrograms = () => async (dispatch) => {
    // const resp = await getPrograms().then((resp) => console.log("resp", resp));
    // console.log("dispatch", dispatch);
    // const resp = await getPrograms();
    const resp = await axios.get("https://api.spaceXdata.com/v3/launches");
    // console.log("resp", resp);
    dispatch({
        type: FETCH_PROGRAMS,
        payload: resp,
    });
};

export const fetchFilters = (dispatch) => {
    dispatch({
        type: FETCH_FILTERS,
        payload: filters,
    });
};
