import { Dispatch } from "redux";
import http from "../../../utils/http";
import {CREATE_ARTIST_FAIL, CREATE_ARTIST_START, CREATE_ARTIST_SUCCESS} from "../types";

export interface userData {
  email: string,
  password: string,
  userName: string
}

export default (data: userData) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: CREATE_ARTIST_START
    });

    await http.post('/artists', data);

    dispatch({
      type: CREATE_ARTIST_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ARTIST_FAIL,
      payload: e.message
    })
  }
};
