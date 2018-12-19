import { delay } from "redux-saga";
import { call, put } from "redux-saga/effects"
import { FETCH_ARTISTS_FAIL, FETCH_ARTISTS_SUCCESS } from "../../store/artists/types";
import http from "../../utils/http";

export default function* fetchArtists() {
  try {
    const { data: { data} } = yield call(http.get, "/artists");

    yield delay(1000);

    yield put({
      type: FETCH_ARTISTS_SUCCESS,
      payload: data
    });
  } catch (e) {
    yield put({
      type: FETCH_ARTISTS_FAIL,
      payload: e.message
    })
  }
}
