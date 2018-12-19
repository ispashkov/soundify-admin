import * as types from "./types";
import {ArtistData, CreateArtistAction} from "../../interfaces";

export const createArtist = (artistData: ArtistData): CreateArtistAction => ({
  type: types.CREATE_ARTIST,
  payload: artistData
});

export const createArtistSuccess = (artist: any) => ({
  type: types.CREATE_ARTIST_SUCCESS,
  payload: artist
});

export const createArtistFail = (message: string) => ({
  type: types.CREATE_ARTIST_FAIL,
  payload: message
});

export const fetchArtists = () => ({ type: types.FETCH_ARTISTS });
