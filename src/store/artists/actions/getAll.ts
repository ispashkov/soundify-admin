import { Dispatch } from "redux";
import http from "../../../utils/http";
import {FETCH_ARTISTS_FAIL, FETCH_ARTISTS_START, FETCH_ARTISTS_SUCCESS} from "../types";


export default () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: FETCH_ARTISTS_START
    });

    const { data: { data} } = await http.get('/artists');

    setTimeout(() => {
      dispatch({
        type: FETCH_ARTISTS_SUCCESS,
        payload: data
      });
    }, 1000)
  } catch (e) {
    dispatch({
      type: FETCH_ARTISTS_FAIL,
      payload: e.message
    })
  }
};
