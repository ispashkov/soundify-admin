import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router'
import http from '../utils/http';
import history from "../utils/history"
import createRootReducer from './rootReducer';
import rootSaga from "../sagas";

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  createRootReducer(history),
  {},
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
      thunk.withExtraArgument(http),
      logger,
    )
  )
)

sagaMiddleware.run(rootSaga);
