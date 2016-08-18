/**
 * Created by ridel1e on 16/08/16.
 */

import controller from './controller';

const COMPONENT_NAME = 'topNav';

const component = {
  templateUrl: './app/modules/common/components/top-nav/template.html',

  bindings: {
    currentState: '<',
    navs: '<'
  },

  controller: controller,
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};