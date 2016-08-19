/**
 * Created by ridel1e on 16/08/16.
 */

import * as actionTypes from './action-types';
import fetch from 'isomorphic-fetch';

const service = ($http) => {
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

      return $http
        .get('/products/_all_docs?include_docs=true')
        .then(response => {
          return response.data;
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

      $http
        .post('/products', product)
        .then(response => {
          return Object.assign({}, product, {
            _id: response.data.id,
            _rev: response.data.rev
          })
        })
        .then(newProduct => {
          dispatch(saveProductSuccess(newProduct))
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

      return $http
        .delete('/products/' + product._id + '?rev=' + product._rev)
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

      return $http
        .put('/products/' + product._id, product)
        .then(response => {
          return Object.assign({}, product, {
            _rev: response.data.rev
          })
        })
        .then(updatedProduct => {
          dispatch(editProductSuccess(updatedProduct));
        })
    };
  };

  return {
    fetchProducts: fetchProducts,
    removeProduct: removeProduct,
    saveProduct: saveProduct,
    editProduct: editProduct
  }
};

service
  .$inject = ['$http'];


export default (ngModule) => {
  ngModule
    .service('productActions', service);
};