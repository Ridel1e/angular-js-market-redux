/**
 * Created by ridel1e on 19/08/16.
 */

import BaseApi from 'helpers/base.api';

const SERVICE_NAME = 'ProductApi';

class ProductApi extends BaseApi {
  constructor($http) {
    super($http);
    this._url = '/products'
  }
}


ProductApi
  .$inject = ['$http'];

export default (ngModule) => {
  ngModule
    .service(SERVICE_NAME, ProductApi);
}