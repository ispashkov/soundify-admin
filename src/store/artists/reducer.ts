import * as types from "./types"

export interface ArtistsInterface {
  items: [],
  isLoading: boolean,
  errors: []
}

const initialState: ArtistsInterface = {
  items: [],
  isLoading: false,
  errors: []
};

type Action = {
  type:
    types.CREATE_ARTIST
    | types.CREATE_ARTIST_SUCCESS
    | types.CREATE_ARTIST_FAIL
    | types.FETCH_ARTISTS
    | types.FETCH_ARTISTS_SUCCESS
    | types.FETCH_ARTISTS_FAIL,
  payload: any
}

export default (state = initialState, { type, payload }: Action): ArtistsInterface => {
  switch (type) {
    case types.CREATE_ARTIST:
    case types.FETCH_ARTISTS:
      return {
        ...state,
        isLoading: true
      };
    case types.CREATE_ARTIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: []
      };
    case types.FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false,
        errors: []
      };
    case types.CREATE_ARTIST_FAIL:
    case types.FETCH_ARTISTS_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    default:
      return state
  }
}
