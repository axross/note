import { preloaderCurtainAction } from '../actions';

export const solvePromiseMiddleware = store => next => action => {
  if (!action.promise) return next(action);

  if (action.isPreloaderCurtainShown) {
    store.dispatch(preloaderCurtainAction.increment());
  }

  action.promise
    .then(value => {
      if (action.isPreloaderCurtainShown) {
        store.dispatch(preloaderCurtainAction.decrement());
      }

      next({
        type: action.type,
        promisedValue: value,
      });
    })
    .catch(err => {
      if (action.isPreloaderCurtainShown) {
        store.dispatch(preloaderCurtainAction.decrement());
      }

      throw err;
    });
}
