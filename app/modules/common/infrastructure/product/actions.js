/**
 * Created by ridel1e on 16/08/16.
 */

import * as actionTypes from './action-types';

const ACTIONS_NAME = 'productActions';

const actions = (selectedProductActions, ProductApi) => {

  return {
    editProduct: editProduct,
    fetchProducts: fetchProducts,
    removeProduct: removeProduct,
    saveProduct: saveProduct
  };
    
  function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsRequest());

      return ProductApi
        .loadAll()
        .then(products => {
          dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
          dispatch(fetchProductsError(error));
        });
    } 
  }
  
  function fetchProductsRequest() {
    return {
      type: actionTypes.FETCH_PRODUCTS_REQUEST,
      payload: {}
    }
  }
  
  function fetchProductsSuccess(products) {
    return {
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: products
    }
  }
  
  function fetchProductsError() {
    return {
      type: actionTypes.FETCH_PRODUCTS_ERROR,
      error: true,
      payload: error
    }  
  }

  function saveProduct(product) {
    return dispatch => {
      dispatch(saveProductRequest(product));

      return ProductApi
        .save(product)
        .then(newProduct => {
          dispatch(saveProductSuccess(newProduct));
        })
        .then(() => {
          dispatch(selectedProductActions.resetProductSelection());
        })
        .catch(error => {
          dispatch(saveProductError(error));
        })
    }
  }
  
  function saveProductRequest(product) {
    return {
      type: actionTypes.SAVE_PRODUCT_REQUEST,
      payload: product
    }
  }
  
  function saveProductSuccess(product) {
    return {
      type: actionTypes.SAVE_PRODUCT_SUCCESS,
      payload: product
    }
  }
  
  function saveProductError(error) {
    return {
      type: actionTypes.SAVE_PRODUCT_ERROR,
      error: true,
      payload: error
    }
  }

  function removeProduct(product) {
    return dispatch => {
      dispatch(removeProductRequest(product));

      return ProductApi
        .remove(product)
        .then(() => {
          dispatch(removeProductSuccess(product))
        })
        .catch(error => {
          dispatch(removeProductError(error))
        });
    }
  }

  function removeProductRequest(product) {
    return {
      type: actionTypes.REMOVE_PRODUCT_REQUEST,
      payload: product
    }
  }

  function removeProductSuccess(product) {
    return {
      type: actionTypes.REMOVE_PRODUCT_SUCCESS,
      payload: product
    }
  }

  function removeProductError(error) {
    return {
      type: actionTypes.REMOVE_PRODUCT_ERROR,
      error: true,
      payload: error
    }
  }

  function editProduct(product) {
    return dispatch => {
      dispatch(editProductRequest(product));

      return ProductApi
        .update(product)
        .then(updatedProduct => {
          dispatch(editProductSuccess(updatedProduct));
        })
        .then(() => {
          dispatch(selectedProductActions.resetProductSelection());
        })
    };
  }

  function editProductRequest(product) {
    return {
      type: actionTypes.EDIT_PRODUCT_REQUEST,
      payload: product
    }
  }

  function editProductSuccess(product) {
    return {
      type: actionTypes.EDIT_PRODUCT_SUCCESS,
      payload: product
    }
  }
};

actions
  .$inject = ['selectedProductActions', 'ProductApi'];


export default (ngModule) => {
  ngModule
    .service(ACTIONS_NAME, actions);
};