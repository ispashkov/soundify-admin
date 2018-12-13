import { FETCH_ARTISTS_START, FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAIL}  from "./types"

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
  type: FETCH_ARTISTS_START | FETCH_ARTISTS_SUCCESS | FETCH_ARTISTS_FAIL,
  payload: any
}

export default (state = initialState, { type, payload }: Action): ArtistsInterface => {
  switch (type) {
    case FETCH_ARTISTS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false,
        errors: []
      };
    case FETCH_ARTISTS_FAIL:
      console.log(payload)
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    default:
      return state
  }
}
