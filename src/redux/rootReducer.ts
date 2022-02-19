import { combineReducers } from "redux";

import getDataReducer from "./reducers/getDataReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  getData: getDataReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
