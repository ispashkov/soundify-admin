import { combineReducers, Reducer } from 'redux';
import layout, { LayoutInterface } from './layout/reducer';
import artists, { ArtistsInterface } from "./artists/reducer";

export interface ApplicationState {
  layout: LayoutInterface,
  artists: ArtistsInterface
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  layout,
  artists
});

export default reducers
