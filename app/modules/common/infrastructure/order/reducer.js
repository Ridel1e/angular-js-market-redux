/**
 * Created by ridel1e on 20/08/16.
 */

import * as actionTypes from './action-types';

const REDUCER_NAME = 'orders';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default (ngModule) => {
  ngModule
    .constant(REDUCER_NAME, reducer);
}