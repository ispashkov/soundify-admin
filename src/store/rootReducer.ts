import { combineReducers } from 'redux';
import { connectRouter, RouterState} from "connected-react-router"
import { History } from "history";
import layout, { LayoutInterface } from './layout/reducer';
import artists, { ArtistsInterface } from "./artists/reducer";

export interface ApplicationState {
  router: RouterState,
  layout: LayoutInterface,
  artists: ArtistsInterface
}

export default (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  layout,
  artists
});
