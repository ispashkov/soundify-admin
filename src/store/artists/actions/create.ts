import { Dispatch } from "redux";
import { push } from "connected-react-router";
import http from "../../../utils/http";
import {CREATE_ARTIST_FAIL, CREATE_ARTIST_START, CREATE_ARTIST_SUCCESS} from "../types";
import * as routes from "../../../constants/routes";

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
    dispatch(push(routes.ARTISTS_LIST))
  } catch (e) {
    dispatch({
      type: CREATE_ARTIST_FAIL,
      payload: e.message
    })
  }
};
