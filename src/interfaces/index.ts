import * as types from "../store/artists/types";

export interface ArtistData {
  email: string,
  password: string,
  userName: string,
  role: number
}

export interface CreateArtistAction {
  type: types.CREATE_ARTIST,
  payload: ArtistData
}
