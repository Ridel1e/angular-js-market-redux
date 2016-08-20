/**
 * Created by ridel1e on 18/08/16.
 */

import ContainerController from 'helpers/container.controller';

class OrderTableController extends ContainerController {
  constructor($ngRedux, $scope, orderActions) {
    super($ngRedux, $scope, orderActions);

    this.orderTableColumns = [
      'code',
      'totalPrice'
    ];

  }

  mapStateToThis(state) {
    return {
      orders: state.orders
    }
  }
}

OrderTableController
  .$inject = ['$ngRedux', '$scope', 'orderActions'];

export default OrderTableController;