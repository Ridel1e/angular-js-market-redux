/**
 * Created by ridel1e on 20/08/16.
 */

import ContainerController from 'helpers/container.controller';

class ShowcaseProductListController extends ContainerController {
  constructor($ngRedux, $scope, cartActions) {
    super($ngRedux, $scope, cartActions);
  }

  mapStateToThis(state) {
    return {
      products: state.products,
      cart: state.cart
    }
  }
}

ShowcaseProductListController
  .$inject = ['$ngRedux', '$scope', 'cartActions'];

export default ShowcaseProductListController;