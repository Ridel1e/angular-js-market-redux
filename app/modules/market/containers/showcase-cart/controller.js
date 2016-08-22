/**
 * Created by ridel1e on 22/08/16.
 */

import ContainerController from 'helpers/container.controller';

class ShowcaseCartController extends ContainerController {
  constructor($ngRedux, $scope, cartActions) {
    super($ngRedux, $scope, cartActions);
  }

  mapStateToThis(state) {
    return {
      cart: state.cart
        .map(cartProduct => {
          return Object.assign({}, cartProduct)
        })
    }
  }
}

ShowcaseCartController
  .$inject =['$ngRedux', '$scope', 'cartActions'];

export default ShowcaseCartController;