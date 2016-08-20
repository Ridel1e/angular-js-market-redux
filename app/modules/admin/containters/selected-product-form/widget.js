/**
 * Created by ridel1e on 19/08/16.
 */

import controller from './controller';

const CONTAINER_NAME = 'selectedProductForm';

const container = {
  template:
  '<product-form selected-product="vm.state.selectedProduct"' +
    'on-save-button-click="vm.state.saveProduct(product)"' +
    'on-edit-button-click="vm.state.editProduct(product)"' +
    'on-cancel-button-click="vm.state.resetSelection()">' +
  '</product-form>',

  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
}