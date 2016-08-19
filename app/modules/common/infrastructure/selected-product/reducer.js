/**
 * Created by ridel1e on 18/08/16.
 */

import * as actionTypes from './action-types';

const REDUCER_NAME = 'selectedProduct';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SELECT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default (ngModule) => {
  ngModule
    .constant(REDUCER_NAME, reducer);
};
