/**
 * Created by ridel1e on 16/08/16.
 */

import * as actionTypes from './action-types';
import fetch from 'isomorphic-fetch';

function productsFormatter(products) {
  let formattedProduct = [];

  products.forEach(product => {
    formattedProduct.push(product.doc)
  });

  return formattedProduct;
}


// let addProductRequest = (product) => {
//   return {
//     type: actionTypes.ADD_PRODUCT_REQUEST,
//     payload: {
//       isValid: true,
//       attributes: product
//     }
//   }
// };
//
// let addProductSuccess = (product) => {
//   return {
//     type: actionTypes.ADD_PRODUCT_SUCCESS,
//     payload: {
//       isValid: true,
//       attributes: product
//     }
//   }
// };
//
// let addProduct = (product) => {
//   return dispatch => {
//     dispatch(addProductRequest(product));
//
//     return fetch()
//   }
// };

let getProductsRequest = () => {
  return {
    type: actionTypes.GET_PRODUCTS_REQUEST,
    payload: {}
  }
};

let getProductsSuccess = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
  }
};

let getProductError = (error) => {
  return {
    type: actionTypes.GET_PRODUCTS_ERROR,
    error: true,
    payload: error
  }
};

let fetchProducts = () => {
  return dispatch => {
    dispatch(getProductsRequest());

    fetch('/products/_all_docs?include_docs=true')
      .then(response => {
        return response.json();
      })
      .then(products => {
        return productsFormatter(products.rows);
      })
      .then(formattedProducts => {
        dispatch(getProductsSuccess(formattedProducts))
      })
      .catch(error => {
        dispatch(getProductError(error));
      });
  }
};

export default (ngModule) => {
  ngModule
    .constant('productActions', {
      fetchProducts: fetchProducts
    });
};