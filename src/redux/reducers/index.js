import { combineReducers } from "redux";
import programsReducer from "./programs.reducer";
import filterReducer from "./filter.reducer";

export default combineReducers({
    programs: programsReducer,
    filters: filterReducer,
});
