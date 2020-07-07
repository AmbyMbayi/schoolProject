import { GET_TEACHERS, ADD_TEACHER } from "../actions/types";

const initialState = {
  teachers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };
    case ADD_TEACHER:
      return {
        ...state,
        teachers: [...state.teachers, action.payload],
      };

    default:
      return state;
  }
}
