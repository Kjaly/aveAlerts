import { Reducer, CombinedState } from "redux";
import { IStore } from "./store";

export type IRootReducer<R = undefined> = Reducer<CombinedState<IStore<R>>>;
