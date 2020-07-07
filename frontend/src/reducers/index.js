import { combineReducers } from "redux";
import school from "./schoolReducers";
import teachers from "./TeachersReducers";

export default combineReducers({
  school,
  teachers,
});
