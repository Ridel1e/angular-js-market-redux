/**
 * Created by ridel1e on 15/08/16.
 */

const routes = ($urlRouterProvider) => {
  $urlRouterProvider
    .otherwise('/admin');
};

routes
  .$inject = ['$urlRouterProvider'];

export default (ngModule) => {
  ngModule
    .config(routes);
};