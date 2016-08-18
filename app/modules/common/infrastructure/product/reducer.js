/**
 * Created by ridel1e on 16/08/16.
 */

import * as actionTypes from './action-types';

const REDUCER_NAME = 'products';

const reducer = (state = [], action) => {
  switch (action.type) {
   case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
   default:
      return state;
  }
};

export default (ngModule) => {
 ngModule
   .constant(REDUCER_NAME, reducer);
};
