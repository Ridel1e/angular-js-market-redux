/**
 * Created by ridel1e on 20/08/16.
 */

const COMPONENT_NAME = 'productList';

const component = {
  templateUrl: './app/modules/market/components/product-list/template.html',

  bindings: {
    products: '<'
  },

  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
}