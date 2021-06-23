import { Dispatch } from 'react';
import { GameProcessActions, GameProcessActionsTypes} from '../types/game';

export const setUser = (name: string, email: string) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_USER, payload: { name, email} });
};

export const setDifficulty = (difficulty: number) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_DIFFICULTY, payload: difficulty });
};

export const setCounter = (counter: number) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_COUNTER, payload: counter });
};

export const setTimer = (time: string) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_TIME, payload: time });
};

export const setGame = (isGame: boolean) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_IS_GAME, payload: isGame });
};

export const setStop = (isStop: boolean) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_IS_STOP, payload: isStop });
};

export const setMenu = (isMenu: boolean) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_IS_MENU, payload: isMenu });
};

export const setLeaderboard = (isLeaderboard: boolean) => (dispatch: Dispatch<GameProcessActions>) => {
  dispatch({ type: GameProcessActionsTypes.SET_IS_LEADERBOARD, payload: isLeaderboard });
};