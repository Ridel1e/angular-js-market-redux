/**
 * Created by ridel1e on 20/08/16.
 */

import controller from './controller';

const CONTAINER_NAME = 'showcaseProductList';

const container = {
  template: '<product-list products="vm.state.products"></product-list>',

  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
}