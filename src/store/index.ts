import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router'
import http from '../utils/http';
import history from "../utils/history"
import createRootReducer from './rootReducer';

const logger = createLogger({
  collapsed: true
});

export default createStore(
  createRootReducer(history),
  {},
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk.withExtraArgument(http),
      logger,
    )
  )
)
