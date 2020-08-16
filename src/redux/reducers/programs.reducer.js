import axios from "axios";
import { FETCH_PROGRAMS_FAIL, FETCH_PROGRAMS_SUCCESS } from "../../common/constants/actionTypes";
import modelProgramCardData from "../../dataModel/programCardData.dataModel";

export const updateProgramPerFilter = (selectedFilters) => async (dispatch, getState) => {
    try {
        const filterQuery = selectedFilters
            .filter((filter) => filter.selectedValue)
            .map((filter) => `${filter.filterName}=${encodeURIComponent(filter.selectedValue)}`)
            .join("&");
        const response = await axios.get(
            "https://api.spaceXdata.com/v3/launches?limit=100" + (filterQuery ? `&${filterQuery}` : "")
        );
        dispatch({
            type: FETCH_PROGRAMS_SUCCESS,
            payload: {
                programs: modelProgramCardData(response.data),
            },
        });
    } catch (e) {
        dispatch({
            type: FETCH_PROGRAMS_FAIL,
            error: `${e}`,
        });
    }
};

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PROGRAMS_SUCCESS:
            return action.payload.programs;
        case FETCH_PROGRAMS_FAIL:
            return [];
        default:
            return state;
    }
};
