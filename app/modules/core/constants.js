/**
 * Created by ridel1e on 15/08/16.
 */

import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import createLogger from 'redux-logger';

export default (ngModule) => {
  ngModule
    .constant('reducersCombiner', {
      combineReducers: combineReducers
    })
    .constant('loggerCreator', {
      createLogger: createLogger
    })
    .constant('router', router);
}