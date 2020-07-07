import { GET_TEACHERS } from "../actions/types";

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

    default:
      return state;
  }
}
