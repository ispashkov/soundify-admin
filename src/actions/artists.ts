import { Dispatch } from "redux";
import http from '../utils/http';

export type FETCH_ARTISTS_START = "FETCH_ARTISTS_START";
export type FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export type FETCH_ARTISTS_FAIL = "FETCH_ARTISTS_FAIL";

export const FETCH_ARTIST_START: FETCH_ARTISTS_START = "FETCH_ARTISTS_START";
export const FETCH_ARTISTS_SUCCESS: FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAIL: FETCH_ARTISTS_FAIL = "FETCH_ARTISTS_FAIL";

const getArtists = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: FETCH_ARTIST_START
    });

    const artists = await http.get('/artists');

    dispatch({
      type: FETCH_ARTISTS_SUCCESS,
      payload: artists
    });
  } catch (e) {
    dispatch({
      type: FETCH_ARTISTS_FAIL,
      payload: e
    })
  }
};

export default {
  getArtists
}
