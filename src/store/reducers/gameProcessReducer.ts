import { GameProcessState, GameProcessActions, GameProcessActionsTypes } from '../types/game';

const initialState: GameProcessState = {
  userName: '',
  userEmail: '',
  difficulty: 8,
  counter: 0,
  time: '00:00:00',
  isGame: false,
  isStop: false,
  isMenu: false,
  isLeaderboard: false,
};

export const gameProcessReducer = (state = initialState, action: GameProcessActions): GameProcessState => {
  switch (action.type) {
    case GameProcessActionsTypes.SET_USER:
      return { ...state, userName: action.payload.name, userEmail: action.payload.email }
    case GameProcessActionsTypes.SET_DIFFICULTY:
      return { ...state, difficulty: action.payload }
    case GameProcessActionsTypes.SET_COUNTER:
      return { ...state, counter: action.payload }
    case GameProcessActionsTypes.SET_TIME:
      return { ...state, time: action.payload }
    case GameProcessActionsTypes.SET_IS_STOP:
      return { ...state, isStop: action.payload }
    case GameProcessActionsTypes.SET_IS_MENU:
      return { ...state, isMenu: action.payload }
    case GameProcessActionsTypes.SET_IS_LEADERBOARD:
      return { ...state, isLeaderboard: action.payload }  
    case GameProcessActionsTypes.SET_IS_GAME:
      return { ...state, isGame: action.payload }  
    default:
      return state
 }
}