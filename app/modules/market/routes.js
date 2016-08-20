/**
 * Created by ridel1e on 16/08/16.
 */

const routes = ($stateProvider) => {
  $stateProvider
    .state('market', {
      abstract: true,
      template:
        '<h2>Market</h2>' +
          '<ui-view></ui-view>'
    })
    .state('market.showcase', {
      url: '/',
      templateUrl: './app/modules/market/pages/market-showcase.html',
      resolve: {
        products: ['productActions', '$ngRedux', function (productActions, $ngRedux) {
          let actions = {};
          $ngRedux
            .connect(null, productActions)(actions);

          return actions.fetchProducts();
        }]
      }
    });
};

routes
  .$inject = ['$stateProvider'];

export default (ngModule) => {
  ngModule
    .config(routes);
}