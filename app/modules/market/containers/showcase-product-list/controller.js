/**
 * Created by ridel1e on 20/08/16.
 */

import ContainerController from 'helpers/container.controller';

class ShowcaseProductListController extends ContainerController {
  constructor($ngRedux, $scope, productActions) {
    super($ngRedux, $scope, productActions);

  }

  mapStateToThis(state) {
    return {
      products: state.products
    }
  }
}

ShowcaseProductListController
  .$inject = ['$ngRedux', '$scope', 'productActions'];

export default ShowcaseProductListController;