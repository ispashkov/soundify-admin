import { all, takeLatest } from "redux-saga/effects"
import {CREATE_ARTIST, FETCH_ARTISTS} from "../store/artists/types";
import createArtist from "../sagas/artists/createArtist";
import fetchArtists from "../sagas/artists/fetchArtists"

function* actionWatcher() {
  yield takeLatest(FETCH_ARTISTS, fetchArtists);
  yield takeLatest(CREATE_ARTIST, createArtist);
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ])
}
