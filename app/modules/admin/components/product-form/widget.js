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
    cancel: '&onCancelButtonClick',
    bindForm: '&bindForm'
  },

  controller: ['$timeout', function ($timeout) {
    $timeout(() =>{
      this.bindForm({
        formName: 'productForm',
        form: this.productForm
      });
    });
    
    
    this.selectedProductIsEmpty = function () {
      return this.selectedProduct.id === undefined;
    };
  }],
  controllerAs: 'vm'
};



export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};