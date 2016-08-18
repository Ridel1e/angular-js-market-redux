/**
 * Created by ridel1e on 16/08/16.
 */

const routes = ($stateProvider) => {
  $stateProvider
    .state('market', {
      url: '/',
      template: '<h2>Market</h2>'
    });
};

routes
  .$inject = ['$stateProvider'];

export default (ngModule) => {
  ngModule
    .config(routes);
}