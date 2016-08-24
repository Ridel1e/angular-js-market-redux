/**
 * Created by ridel1e on 19/08/16.
 */

import formScheme from './form-validation.json';

const COMPONENT_NAME = 'productForm';

const component = {
  templateUrl: './app/modules/admin/components/product-form/template.html',

  bindings: {
    selectedProduct: '<',
    saveProduct: '&onSaveButtonClick',
    editProduct: '&onEditButtonClick',
    cancel: '&onCancelButtonClick',
    setFormValidation: '&setFormValidation'
  },

  controller: ['$timeout', function ($timeout) {
    $timeout(() =>{
      this.setFormValidation({
        form: this.productForm,
        scheme: formScheme
      })
    }, 0);
    
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