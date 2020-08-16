import { FETCH_FILTERS } from "../../common/constants/actionTypes";
import { filters } from "../../common/constants/filterMockJson";
import { updateProgramPerFilter } from "../reducers/programs.reducer";
import { UPDATE_FILTER } from "../../common/constants/actionTypes";
import { updateUrlWithFilters } from "../../common/helpers/utilities";

const initialState = filters;

export const updateFilter = (payload) => (dispatch, getState) => {
    // update filter selection via redux
    dispatch({
        type: UPDATE_FILTER,
        payload,
    });

    // get selected filters and call thunk for program reducer
    const selectedFilters = Object.values(getState().filters).map((filter) => ({
        filterName: filter.filterParamName,
        selectedValue: filter.selectedValue,
    }));

    // run programs thunk so that we can fetch and update data in program reducer
    dispatch(updateProgramPerFilter(selectedFilters));

    updateUrlWithFilters(selectedFilters.filter((filterItem) => filterItem.selectedValue));
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILTERS:
            return action.payload;
        case UPDATE_FILTER:
            return {
                ...state,
                [action.payload.filterId]: {
                    ...state[action.payload.filterId],
                    selectedValue: action.payload.selectedValue,
                },
            };
        default:
            return state;
    }
};
