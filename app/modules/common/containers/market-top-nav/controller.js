/**
 * Created by ridel1e on 16/08/16.
 */

import ContainerController from 'helpers/container.controller';

class MarketTopNavController extends ContainerController {
  constructor($ngRedux, $scope) {
    super($ngRedux, $scope);

    this.marketNavs = [{
      name: 'Shop',
      state: 'market'
    }, {
      name: 'Admin',
      state: 'admin.products'
    }];
  }

  mapStateToThis(state) {
    return {
      router: state.router
    }
  }
}

MarketTopNavController
  .$inject = ['$ngRedux', '$scope'];

export default MarketTopNavController;