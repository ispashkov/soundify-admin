import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import http from '../utils/http';
import rootReducer from './rootReducer';

const logger = createLogger({
  collapsed: true
});

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(http),
      logger,
    )
  )
)
