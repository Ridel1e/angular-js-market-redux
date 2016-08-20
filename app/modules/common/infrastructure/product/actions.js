/**
 * Created by ridel1e on 16/08/16.
 */

import * as actionTypes from './action-types';

const service = (selectedProductActions, ProductApi) => {

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

      return ProductApi
        .loadAll()
        .then(products => {
          dispatch(getProductsSuccess(products))
        })
        .catch(error => {
          dispatch(getProductError(error));
        });
    }
  };
  
  function productsFormatter(products) {
    let formattedProduct = [];

    products.forEach(product => {
      formattedProduct.push(product.doc)
    });

    return formattedProduct;
  }

  let saveProductRequest = (product) => {
    return {
      type: actionTypes.ADD_PRODUCT_REQUEST,
      payload: product
    }
  };

  let saveProductSuccess = (product) => {
    return {
      type: actionTypes.ADD_PRODUCT_SUCCESS,
      payload: product
    }
  };

  let saveProduct = (product) => {
    return dispatch => {
      dispatch(saveProductRequest(product));

      return ProductApi
        .save(product)
        .then(newProduct => {
          dispatch(selectedProductActions.resetProductSelection());
          dispatch(saveProductSuccess(newProduct));
        })
    }
  };

  let removeProductRequest = (product) => {
    return {
      type: actionTypes.REMOVE_PRODUCT_REQUEST,
      payload: product
    }
  };

  let removeProductSuccess = (product) => {
    return {
      type: actionTypes.REMOVE_PRODUCT_SUCCESS,
      payload: product
    }
  };

  let removeProduct = (product) => {
    return dispatch => {
      dispatch(removeProductRequest(product));

      return ProductApi
        .remove(product)
        .then(() => {
          dispatch(removeProductSuccess(product))
        });
    }
  };

  let editProductRequest = (product) => {
    return {
      type: actionTypes.EDIT_PRODUCT_REQUEST,
      payload: product
    }
  };

  let editProductSuccess = (product) => {
    return {
      type: actionTypes.EDIT_PRODUCT_SUCCESS,
      payload: product
    }
  };

  let editProduct = (product) => {
    return dispatch => {
      dispatch(editProductRequest(product));

      return ProductApi
        .update(product)
        .then(updatedProduct => {
          dispatch(selectedProductActions.resetProductSelection());
          dispatch(editProductSuccess(updatedProduct));
        })
    };
  };

  return {
    editProduct: editProduct,
    fetchProducts: fetchProducts,
    removeProduct: removeProduct,
    saveProduct: saveProduct
  }
};

service
  .$inject = ['selectedProductActions', 'ProductApi'];


export default (ngModule) => {
  ngModule
    .service('productActions', service);
};