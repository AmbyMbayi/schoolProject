import axios from "axios";

import { GET_SCHOOL, DELETE_SCHOOL, ADD_SCHOOL } from "./types";

//get schools
export const getSchool = () => (dispatch) => {
  axios
    .get("/api/school/")
    .then((res) => {
      dispatch({
        type: GET_SCHOOL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//delete school

export const deleteSchool = (id) => (dispatch) => {
  axios
    .delete(`/api/school/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_SCHOOL,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//add school

export const addSchool = (sch) => (dispatch) => {
  axios
    .post("/api/school/", sch)
    .then((res) => {
      dispatch({
        type: ADD_SCHOOL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
