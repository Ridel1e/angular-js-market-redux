/**
 * Created by ridel1e on 15/08/16.
 */

import angular from 'angular';

import core from 'modules/core';
import common from 'modules/common';
import admin from 'modules/admin';
import market from 'modules/market';

const MODULE_NAME = 'marketJs';

export default angular
  .module(MODULE_NAME, [
    core,
    common,
    admin,
    market
  ]);