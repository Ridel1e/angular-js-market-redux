/**
 * Created by ridel1e on 15/08/16.
 */

const config = ($ngReduxProvider, reducersCombiner, router, products, loggerCreator, thunkMiddleware) => {
  let rootReducer = reducersCombiner.combineReducers({
    router: router,
    products: products
  });

  let loggerMiddleware = loggerCreator
    .createLogger({level: 'info', collapsed: true});

  $ngReduxProvider
    .createStoreWith(rootReducer, ['ngUiRouterMiddleware', thunkMiddleware, loggerMiddleware])
};

config
  .$inject = [
    '$ngReduxProvider',
    'reducersCombiner',
    'router',
    'products',
    'loggerCreator',
    'thunkMiddleware'
  ];

export default (ngModule) => {
  ngModule
    .config(config);
};