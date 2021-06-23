export enum GameProcessActionsTypes {
    SET_USER = 'SET_USER',
    SET_DIFFICULTY = 'SET_DIFFICULTY',
    SET_COUNTER ='SET_COUNTER',
    SET_TIME = 'SET_TIME',
    SET_IS_GAME = 'SET_IS_GAME',
    SET_IS_STOP = 'SET_IS_STOP',
    SET_IS_MENU = 'SET_IS_MENU',
    SET_IS_LEADERBOARD = 'SET_IS_LEADERBOARD',
  };
  
  interface User {
    name: string;
    email: string;
  };
  
  interface SetUserAction {
    type: GameProcessActionsTypes.SET_USER,
    payload: User,
  };
  
  interface SetDifficultyAction {
    type: GameProcessActionsTypes.SET_DIFFICULTY,
    payload: number,
  };
  
  interface SetCounterAction {
    type: GameProcessActionsTypes.SET_COUNTER,
    payload: number,
  };
  
  interface SetTimeAction {
    type: GameProcessActionsTypes.SET_TIME,
    payload: string,
  };

  interface SetGameAction {
    type: GameProcessActionsTypes.SET_IS_GAME,
    payload: boolean,
  };

  interface SetStopAction {
    type: GameProcessActionsTypes.SET_IS_STOP,
    payload: boolean,
  };

  interface SetMenuAction {
    type: GameProcessActionsTypes.SET_IS_MENU,
    payload: boolean,
  };

  interface SetLeaderboardAction {
    type: GameProcessActionsTypes.SET_IS_LEADERBOARD,
    payload: boolean,
  };
  
  export type GameProcessActions = SetUserAction | SetDifficultyAction | SetCounterAction | SetTimeAction | SetStopAction | SetMenuAction | SetLeaderboardAction | SetGameAction;
  
  export interface GameProcessState {
    userName: string,
    userEmail: string,
    difficulty: number,
    counter: number,
    time: string,
    isGame: boolean,
    isStop: boolean,
    isMenu: boolean,
    isLeaderboard: boolean,
  };