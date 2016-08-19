/**
 * Created by ridel1e on 18/08/16.
 */

import * as actionTypes from './action-types';

let selectProduct = (product) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product
  }
};

export default (ngModule) => {
  ngModule
    .constant('selectedProductActions', {
      selectProduct: selectProduct
    })
};