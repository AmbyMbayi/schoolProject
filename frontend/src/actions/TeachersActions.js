import axios from "axios";

import { GET_TEACHERS } from "./types";

export const getTeachers = () => (dispatch) => {
  axios
    .get("/api/teachers")
    .then((res) => {
      dispatch({
        type: GET_TEACHERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
