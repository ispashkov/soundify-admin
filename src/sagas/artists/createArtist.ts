import { delay } from "redux-saga";
import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects"
import { createArtistSuccess, createArtistFail } from "../../store/artists/actions";
import http from "../../utils/http";
import * as routes from "../../constants/routes";
import { CreateArtistAction } from "../../interfaces";

export default function* createArtist({ payload }: CreateArtistAction) {
  try {

    const artist = yield call(http.post, '/artists', payload);

    yield delay(1000);

    yield put(createArtistSuccess(artist));
    yield put(push(routes.ARTISTS_LIST))
  } catch (e) {
    yield put(createArtistFail(e.message))
  }
};
