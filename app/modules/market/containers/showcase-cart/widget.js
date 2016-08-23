/**
 * Created by ridel1e on 22/08/16.
 */

import controller from './controller';

const CONTAINER_NAME = 'showcaseCart';

const container = {
  template:
  '<cart product-list="vm.state.cart"' +
    'on-remove-button-click="vm.state.removeFromCart(index)"' +
    'on-product-amount-change="vm.state.changeProductAmount(amount, index)"' +
    'on-make-order-button-click="vm.state.saveOrder(productList, totalPrice)">' +
  '</cart>',

  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
}