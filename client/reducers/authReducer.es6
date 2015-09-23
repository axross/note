import {
  AUTH_CHECK,
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
} from '../actions';

const initialState = {
  isAuthed: false,
  user: null,
};

export const auth = (previousState = initialState, action) => {
  if (action.type === AUTH_CHECK) {
    return {

    };
  }
  if (action.type === AUTH_SIGNIN) {
    return {
      isAuthed: true,
      user: action.promisedValue,
    };
  }
  if (action.type === AUTH_SIGNOUT) {
    return {
      isAuthed: false,
      user: null,
    };
  }

  return previousState;
};
