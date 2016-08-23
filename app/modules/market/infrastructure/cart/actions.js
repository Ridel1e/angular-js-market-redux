/**
 * Created by ridel1e on 22/08/16.
 */

import * as actionsTypes from './action-types';

const ACTIONS_NAME = 'cartActions';

const actions = ($localStorage) => {
  return {
    addToCart: addToCart,
    changeProductAmount: changeProductAmount,
    fetchCart: fetchCart,
    removeFromCart: removeFromCart,
    resetCart: resetCart
  };

  function addToCart(product) {
    return (dispatch, getState) => {
      dispatch({
        type: actionsTypes.ADD_TO_CART,
        payload: Object
          .assign({}, product, {
            amount: 1
          })
      });

      $localStorage.cart = getState().cart
    }
  }

  function removeFromCart(index) {
    return (dispatch, getState) => {
      dispatch({
        type: actionsTypes.REMOVE_FROM_CART,
        payload: {
          index: index
        }
      });

      $localStorage.cart = getState().cart;
    }
  }
  
  function changeProductAmount(amount, index) {
    return (dispatch, getState) => {
      dispatch({
        type: actionsTypes.CHANGE_PRODUCT_AMOUNT,
        payload: {
          amount: amount,
          index: index
        }
      });

      $localStorage.cart = getState().cart;
    }
  }

  function fetchCart() {
    return dispatch => {
      let cart = $localStorage.cart || [];
      
      dispatch({
        type: actionsTypes.FETCH_CART,
        payload: cart
      })
    }
  }

  function resetCart() {
    return dispatch => {
      delete $localStorage.cart;

      dispatch({
        type: actionsTypes.RESET_CART,
        payload: []
      })
    }
  }
};

actions
  .$inject = ['$localStorage'];

export default (ngModule) => {
  ngModule
    .service(ACTIONS_NAME, actions);
}
