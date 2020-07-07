import {
  GET_SCHOOL,
  DELETE_SCHOOL,
  ADD_SCHOOL,
  EDIT_SCHOOL,
} from "../actions/types";

const initialState = {
  school: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SCHOOL:
      return {
        ...state,
        school: action.payload,
      };
    case DELETE_SCHOOL:
      return {
        ...state,
        school: state.school.filter((sch) => sch.id !== action.payload),
      };

    case ADD_SCHOOL:
      return {
        ...state,
        school: [...state.school, action.payload],
      };

    default:
      return state;
  }
}
