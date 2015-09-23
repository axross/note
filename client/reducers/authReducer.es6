import {
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
} from '../actions';

const initialState = {
  isAuthed: false,
};

export const auth = (previousState = initialState, action) => {
  if (action.type === AUTH_SIGNIN) {
    console.log(action.promisedValue);
  }
  if (action.type === AUTH_SIGNOUT) {
    console.log(action.promisedValue);
  }

  return previousState;
};
