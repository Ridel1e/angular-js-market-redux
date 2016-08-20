/**
 * Created by ridel1e on 20/08/16.
 */

import BaseApi from 'helpers/base.api';

const SERVICE_NAME = 'OrderApi';

class OrderApi extends BaseApi {
  constructor($http) {
    super($http);
    this._url = '/orders';
    this._idAttribute = 'code';
  }
}

OrderApi
  .$inject = ['$http'];

export default (ngModule) => {
  ngModule
    .service(SERVICE_NAME, OrderApi);
}