/**
 * Created by ridel1e on 15/08/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import reduxRouter from 'redux-ui-router';
import ngStorage from 'ngstorage';

const MODULE_NAME = 'marketJs.core';

export default angular
  .module(MODULE_NAME, [
    uiRouter,
    ngRedux,
    reduxRouter,
    ngStorage.name
  ]);