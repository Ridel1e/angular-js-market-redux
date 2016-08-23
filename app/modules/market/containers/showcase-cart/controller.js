/**
 * Created by ridel1e on 22/08/16.
 */

import ContainerController from 'helpers/container.controller';

class ShowcaseCartController extends ContainerController {
  constructor($ngRedux, $scope, cartActions, orderActions) {
    super($ngRedux, $scope, {
      changeProductAmount: cartActions.changeProductAmount,
      removeFromCart: cartActions.removeFromCart,
      saveOrder: orderActions.saveOrder
    });
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
  .$inject =['$ngRedux', '$scope', 'cartActions', 'orderActions'];

export default ShowcaseCartController;