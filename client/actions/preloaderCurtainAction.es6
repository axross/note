export const PRELOADERCURTAIN_INCREMENT = 'PRELOADERCURTAIN_INCREMENT';
export const PRELOADERCURTAIN_DECREMENT = 'PRELOADERCURTAIN_DECREMENT';

const increment = () => {
  return {
    type: PRELOADERCURTAIN_INCREMENT,
  };
};

const decrement = () => {
  return {
    type: PRELOADERCURTAIN_DECREMENT,
  };
};

export const preloaderCurtainAction = {
  increment,
  decrement,
};
