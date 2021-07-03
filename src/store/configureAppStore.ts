import { applyMiddleware, } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { createRootReducer } from './rootReducer'
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from 'connected-react-router';


export const history = createBrowserHistory();

export function configureAppStore(preloadedState?: any) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware)

  const store = configureStore({
    reducer: createRootReducer(history),
    middleware: [routerMiddleware(history), sagaMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [middlewareEnhancer]
  })

  return store
}

