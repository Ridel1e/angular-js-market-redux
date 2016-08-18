/**
 * Created by ridel1e on 15/08/16.
 */

const routes = ($stateProvider) => {
  $stateProvider
    .state('admin', {
      url: '/admin',
      template:
        '<h2>Admin</h2>' +
        '<ul>' +
          '<li><a ui-sref="admin.products">products</a></li>' +
          '<li><a ui-sref="admin.orders">orders</a></li>' +
        '</ul>' +
        '<ui-view></ui-view>'
    })
    .state('admin.products', {
      url: '/products',
      templateUrl: './app/pages/admin-products.html',
      resolve: {
        products: ['productActions', '$ngRedux', function (productActions, $ngRedux) {
          let actions = {};
          $ngRedux
            .connect(null, productActions)(actions);

          return actions.fetchProducts();
        }]
      }
    })
    .state('admin.orders', {
      url: '/orders',
      templateUrl: './app/pages/admin-orders.html'
    });
};

routes
  .$inject = ['$stateProvider', '$ngReduxProvider'];

export default (ngModule) => {
  ngModule
    .config(routes);
};
