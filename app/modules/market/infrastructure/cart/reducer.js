/**
 * Created by ridel1e on 22/08/16.
 */

import * as actionsTypes from './action-types';

const REDUCER_NAME = 'cart';

const reducer = (state = [], action) => {
  switch(action.type) {
    case actionsTypes.ADD_TO_CART:
      return [
        ...state,
        action.payload
      ];

    case actionsTypes.REMOVE_FROM_CART:
      return state
        .filter((cartProduct, index) => {
          return index !== action.payload.index;
        });

    case actionsTypes.CHANGE_PRODUCT_AMOUNT:
      return state
        .map((cartProduct, index) => {
          if(index === action.payload.index) {
            return Object.assign({}, cartProduct, {
              amount: action.payload.amount
            })
          }

          return cartProduct;
        });

    case actionsTypes.FETCH_CART:
    case actionsTypes.RESET_CART:  
      return action.payload;

    default:
      return state
  }
};


export default (ngModule) => {
  ngModule
    .constant(REDUCER_NAME, reducer)
}