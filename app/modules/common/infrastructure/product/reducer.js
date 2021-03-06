/**
 * Created by ridel1e on 16/08/16.
 */

import * as actionTypes from './action-types';

const REDUCER_NAME = 'products';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return action.payload;

    case actionTypes.REMOVE_PRODUCT_SUCCESS:
      return state
        .filter(product => {
          return product.id !== action.payload.id
        });

    case actionTypes.SAVE_PRODUCT_SUCCESS:
      return [
        ...state,
        action.payload
      ];

    case actionTypes.EDIT_PRODUCT_SUCCESS:
      return state
        .map(product => {
          if(product.id === action.payload.id) {
            return action.payload
          }

          return product;
        });

    default:
      return state;
  }
};

export default (ngModule) => {
 ngModule
   .constant(REDUCER_NAME, reducer);
};
