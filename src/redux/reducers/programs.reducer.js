import { FETCH_PROGRAMS } from "../../common/constants/actionTypes";

export default (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case FETCH_PROGRAMS:
            return action.payload.data;
        default:
            return state;
    }
};
