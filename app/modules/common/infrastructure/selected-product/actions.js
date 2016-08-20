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

let resetProductSelection = () => {
  return {
    type: actionTypes.RESET_PRODUCT_SELECTION,
    payload: {}
  };
};

export default (ngModule) => {
  ngModule
    .constant('selectedProductActions', {
      resetProductSelection: resetProductSelection,
      selectProduct: selectProduct
    })
};