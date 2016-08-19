/**
 * Created by ridel1e on 19/08/16.
 */

const COMPONENT_NAME = 'productForm';

const component = {
  templateUrl: './app/modules/admin/components/product-form/template.html',

  bindings: {
    selectedProduct: '<',
    saveProduct: '&onSaveButtonClick',
    editProduct: '&onEditButtonClick',
    cancel: '&onCancelButtonClick'
  },

  controller: function () {
    this.selectedProductIsEmpty = function () {
      return Object.keys(this.selectedProduct).length === 0;
    };
  },
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};