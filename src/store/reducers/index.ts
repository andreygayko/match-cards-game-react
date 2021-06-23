import { combineReducers } from "redux";
import { gameProcessReducer } from './gameProcessReducer';

export const rootReducer = combineReducers({
  gameProcess: gameProcessReducer,
});

export type RootState = ReturnType<typeof rootReducer>