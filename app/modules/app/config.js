/**
 * Created by ridel1e on 15/08/16.
 */

import productFormValidation from "../admin/components/product-form/form-validation.json";

const config = ($ngReduxProvider, ngReduxFormProvider, reducersCombiner, router, products, orders, selectedProduct, cart, loggerCreator, thunkMiddleware) => {

  let productFormFields = ['productName', 'productDescription', 'productPrice', 'productAmount'];

  let rootReducer = reducersCombiner.combineReducers({
    router: router,
    products: products,
    orders: orders,
    selectedProduct: selectedProduct,
    cart: cart,
    productForm: ngReduxFormProvider.createFormReducer('productForm', productFormFields, productFormValidation)
  });
  
  let loggerMiddleware = loggerCreator
    .createLogger({level: 'info', collapsed: true});

  $ngReduxProvider
    .createStoreWith(rootReducer, ['ngUiRouterMiddleware', thunkMiddleware, loggerMiddleware])
};

config
  .$inject = [
    '$ngReduxProvider',
    'ngReduxFormProvider',
    'reducersCombiner',
    'router',
    'products',
    'orders',
    'selectedProduct',
    'cart',
    'loggerCreator',
    'thunkMiddleware'
  ];

export default (ngModule) => {
  ngModule
    .config(config);
};