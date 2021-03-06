/**
 * Created by ridel1e on 18/08/16.
 */

import controller from './controller';

const CONTAINER_NAME ='orderTable';

const container = {
  template: '<entity-table items="vm.state.orders" columns="vm.orderTableColumns"></entity-table>',

  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
}