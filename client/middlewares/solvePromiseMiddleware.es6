export const solvePromiseMiddleware = store => next => action => {
  if (!action.promise) return next(action);

  action.promise
    .then(value => {
      next({
        type: action.type,
        promisedValue: value,
      });
    })
    .catch(err => {
      throw err;
    });
}
