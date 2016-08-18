/**
 * Created by ridel1e on 16/08/16.
 */

import controller from './controller';

const CONTAINER_NAME = 'marketTopNav';

const container = {
  template: '<top-nav current-state="vm.state.router.currentState" navs="vm.marketNavs"></top-nav>',

  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
};