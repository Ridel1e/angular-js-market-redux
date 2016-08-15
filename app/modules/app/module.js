/**
 * Created by ridel1e on 15/08/16.
 */

import angular from 'angular';

import core from 'modules/core';
import admin from 'modules/admin';

const MODULE_NAME = 'marketJs';

export default angular
  .module(MODULE_NAME, [
    core,
    admin
  ]);