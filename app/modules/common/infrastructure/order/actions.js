/**
 * Created by ridel1e on 20/08/16.
 */

import * as actionTypes from './action-types';

const ACTIONS_NAME = 'orderActions';

const actions = (OrderApi, cartActions) => {

  return {
    fetchOrders: fetchOrders,
    saveOrder: saveOrder
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
      type: actionTypes.FETCH_ORDERS_REQUEST,
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

  function saveOrder(productList, totalPrice) {
    return dispatch => {
      let order = {
        productList: productList,
        totalPrice: totalPrice
      };

      dispatch(saveOrderRequest(order));

      return OrderApi
        .save(order)
        .then(newOrder => {
          dispatch(saveOrderSuccess(newOrder));
        })
        .then(() => {
          dispatch(cartActions.resetCart());
        })
        .catch(error => {
          dispatch(saveOrderError(error));
        })
    }
  }

  function saveOrderRequest(order) {
    return {
      type: actionTypes.SAVE_ORDER_REQUEST,
      payload: order
    }
  }

  function saveOrderSuccess(order) {
    return {
      type: actionTypes.SAVE_ORDER_SUCCESS,
      payload: order
    }
  }

  function saveOrderError(error) {
    return {
      type: actionTypes.SAVE_ORDER_ERROR,
      error: true,
      payload: error
    }
  }
};

actions
  .$inject = ['OrderApi', 'cartActions'];

export default (ngModule) => {
  ngModule
    .service(ACTIONS_NAME, actions);
}