import { combineReducers } from 'redux';
import { sharedRootReducer } from "@shared";
import { connectRouter, RouterState } from "connected-react-router";
import { IRootReducer } from "../../typings/react";
import { History } from 'history';


export const createRootReducer = (history: History): IRootReducer<RouterState> =>
  combineReducers({
    router: connectRouter(history),
    ...sharedRootReducer,
  });
