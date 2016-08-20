/**
 * Created by ridel1e on 16/08/16.
 */

const COMPONENT_NAME = 'topNav';

const component = {
  templateUrl: './app/modules/common/components/top-nav/template.html',

  bindings: {
    currentState: '<',
    navs: '<'
  },

  controller: function () {
    this.isActiveState = function (state) {
      return this.currentState.name.substring(0, this.currentState.name.indexOf('.'))
        === state.substring(0, state.indexOf('.'));
    }
  },
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};