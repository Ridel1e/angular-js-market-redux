/**
 * Created by ridel1e on 20/08/16.
 */

import * as actionTypes from './action-types';

const ACTIONS_NAME = 'orderActions';

const actions = OrderApi => {

  return {
    fetchOrders: fetchOrders
  };

  function fetchOrders() {
    return dispatch => {
      dispatch(fetchOrdersRequest());

      return OrderApi
        .loadAll()
        .then(orders => {
          dispatch(fetchOrdersSuccess(orders));
        })
        .catch(error => {
          dispatch(fetchOrdersError(error))
        })
    }
  }

  function fetchOrdersRequest() {
    return {
      type: actionTypes.FETCH_ORDERS_REQEST,
      payload: {}
    }
  }

  function fetchOrdersSuccess(orders) {
    return {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      payload: orders
    }
  }

  function fetchOrdersError(error) {
    return {
      type: actionTypes.FETCH_ORDERS_ERROR,
      error: true,
      payload: error
    }
  }
};

export default (ngModule) => {
  ngModule
    .service(ACTIONS_NAME, actions);
}