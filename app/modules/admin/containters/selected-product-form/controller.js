/**
 * Created by ridel1e on 19/08/16.
 */

import ContainerController from "helpers/container.controller";

class SelectedProductFormController extends ContainerController {
  constructor($ngRedux, $scope, productActions, selectedProductActions, ngReduxForm) {
    super($ngRedux, $scope, {
      saveProduct: productActions.saveProduct,
      editProduct: productActions.editProduct,
      resetSelection: selectedProductActions.resetProductSelection
    });

    this.bindForm = ngReduxForm.connect;
  }

  mapStateToThis(state) {
    return {
      selectedProduct: Object.assign({}, state.selectedProduct)
    }
  }
}

SelectedProductFormController
  .$inject = ['$ngRedux', '$scope', 'productActions', 'selectedProductActions', 'ngReduxForm'];

export default SelectedProductFormController;