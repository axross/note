import {
  PRELOADERCURTAIN_INCREMENT,
  PRELOADERCURTAIN_DECREMENT,
} from '../actions';

const initialState = {
  count: 0,
};

export const preloaderCurtain = (previousState = initialState, action) => {
  if (action.type === PRELOADERCURTAIN_INCREMENT) {
    return { count: previousState.count + 1 };
  }
  if (action.type === PRELOADERCURTAIN_DECREMENT) {
    return { count: previousState.count - 1 };
  }

  return previousState;
};
