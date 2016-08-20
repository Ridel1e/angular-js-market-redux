/**
 * Created by ridel1e on 18/08/16.
 */

import controller from './controller';

const CONTAINER_NAME = 'productTable';

const container = {
  template:
  '<entity-table items="vm.state.products" ' +
    'columns="vm.productTableColumns" ' +
    'on-item-select="vm.state.selectProduct(item)" ' +
    'selected-item="vm.state.selectedProduct"' +
    'on-item-remove-button-click="vm.state.removeProduct(item)"> ' +
  '</entity-table>',
  
  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
};