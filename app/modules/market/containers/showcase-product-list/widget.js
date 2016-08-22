/**
 * Created by ridel1e on 20/08/16.
 */

import controller from './controller';

const CONTAINER_NAME = 'showcaseProductList';

const container = {
  template:
  '<product-list products="vm.state.products"' +
    'cart="vm.state.cart"' +
    'on-add-to-cart-button-click="vm.state.addToCart(product)">' +
  '</product-list>',

  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
}