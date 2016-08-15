/**
 * Created by ridel1e on 15/08/16.
 */

const routes = ($stateProvider) => {
  $stateProvider
    .state('admin', {
      url: '/admin',
      template: ''
    });
};

routes
  .$inject = ['$stateProvider'];

export default (ngModule) => {
  ngModule
    .config(routes);
};