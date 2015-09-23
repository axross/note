import firebase from '../firebase';

export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';

const check = () => {
  return {
    type: AUTH_CHECK,
    promise: new Promise((resolve, reject) => {
      const authData = firebase.getAuth();

      return resolve(authData);
    }),
  };
};

const signin = () => {
  return {
    type: AUTH_SIGNIN,
    promise: new Promise((resolve, reject) => {
      firebase.authWithOAuthPopup('google', (err, authData) => {
        if (err) return reject(err);

        return resolve(authData);
      });
    }),
  };
};

const signout = () => {
  return {
    type: AUTH_SIGNOUT,
    promise: new Promise((resolve, reject) => {
      return setTimeout(() => resolve(firebase.unauth()), 500);
    }),
  };
};

export const authAction = {
  check,
  signin,
  signout,
};
