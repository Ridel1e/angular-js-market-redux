/**
 * Created by ridel1e on 15/08/16.
 */

const config = ($ngReduxProvider, reducersCombiner, router, loggerCreator) => {
  let rootReducer = reducersCombiner.combineReducers({
    router: router
  });

  let logger = loggerCreator
    .createLogger({level: 'info', collapsed: true});

  $ngReduxProvider
    .createStoreWith(rootReducer, ['ngUiRouterMiddleware', logger])
};

config
  .$inject = [
    '$ngReduxProvider',
    'reducersCombiner',
    'router',
    'loggerCreator'
  ];

export default (ngModule) => {
  ngModule
    .config(config);
};