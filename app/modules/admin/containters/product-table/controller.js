/**
 * Created by ridel1e on 18/08/16.
 */

import ContainerController from 'helpers/container.controller';

class ProductTableController extends ContainerController {
  constructor($ngRedux, $scope, productActions, selectedProductActions) {
    super($ngRedux, $scope, {
      selectProduct: selectedProductActions.selectProduct,
      removeProduct: productActions.removeProduct
    });

    this.productTableColumns = [
      'name',
      'description',
      'price',
      'amount'
    ];

    this.productTableActions = [
      'delete',
      'edit'
    ]
  }

  mapStateToThis(state) {
    return {
      products: state.products,
      selectedProduct: state.selectedProduct
    }
  }
}

ProductTableController
  .$inject = ['$ngRedux', '$scope', 'productActions', 'selectedProductActions'];

export default ProductTableController;