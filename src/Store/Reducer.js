import { combineReducers } from "redux";
import ConfigReducer from "./ConfigReducer";

const rootReducer = combineReducers({
    config: ConfigReducer,
});

export default rootReducer;
