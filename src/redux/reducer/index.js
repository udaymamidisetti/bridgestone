import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import newtiredataReducer from './newtiredataReducer'


export default combineReducers({
  categoryReducer,
  newtiredataReducer,
});
