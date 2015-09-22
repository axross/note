import firebase from '../firebase';

const signup = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    firebase.createUser({
      email,
      password,
    }, (err, userData) => {
      if (err) return reject(err);

      return resolve(userData.uid);
    });
  });
};

const signin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    firebase.authWithPassword({
      email,
      password,
    }, (err, authData) => {
      if (err) return reject(err);

      return resolve(authData.uid);
    });
  });
};

const signout = () => {
  return new Promise((resolve, reject) => {
    firebase.unauth();

    resolve();
  });
};

export const authResource = {
  signup,
  signin,
  signout,
};
