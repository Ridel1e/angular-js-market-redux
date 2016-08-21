/**
 * Created by ridel1e on 18/08/16.
 */

import * as actionTypes from './action-types';

const ACTIONS_NAME = 'selectedProductActions';

const actions = () => {
  return {
    selectProduct: selectProduct,
    resetProductSelection: resetProductSelection
  };

  function selectProduct(product) {
    return {
      type: actionTypes.SELECT_PRODUCT,
      payload: product
    }
  }

  function resetProductSelection() {
    return {
      type: actionTypes.RESET_PRODUCT_SELECTION,
      payload: {}
    };
  }
};

export default (ngModule) => {
  ngModule
    .service(ACTIONS_NAME, actions)
};