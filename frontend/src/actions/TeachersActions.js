import axios from "axios";

import { GET_TEACHERS, ADD_TEACHER } from "./types";

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

export const addTeacher = (teacher) => (dispatch) => {
  axios
    .post("/api/teachers/", teacher)
    .then((res) => {
      dispatch({
        type: ADD_TEACHER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
