/**
 * Created by ridel1e on 22/08/16.
 */

const COMPONENT_NAME = 'cart';

const component = {
  templateUrl: './app/modules/market/components/cart/template.html',

  bindings: {
    productList: '<',
    changeProductAmount: '&onProductAmountChange',
    removeFromCart: '&onRemoveButtonClick'
  },

  controller: function () {
    
    this.getFullPrice = function () {
      let fullPrice = 0;

      this.productList.forEach(product => {
        fullPrice += product.price * product.amount
      });

      return fullPrice;
    }
  },
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};
