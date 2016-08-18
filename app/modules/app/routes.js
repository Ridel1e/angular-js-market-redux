/**
 * Created by ridel1e on 15/08/16.
 */

const routes = ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider
    .otherwise('/admin/products');
};

routes
  .$inject = ['$urlRouterProvider', '$stateProvider'];

export default (ngModule) => {
  ngModule
    .config(routes);
};