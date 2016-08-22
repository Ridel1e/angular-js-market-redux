/**
 * Created by ridel1e on 20/08/16.
 */

const COMPONENT_NAME = 'productList';

const component = {
  templateUrl: './app/modules/market/components/product-list/template.html',

  bindings: {
    addToCart: '&onAddToCartButtonClick',
    cart: '<',
    products: '<'
  },

  controller: function () {
    this.isInCart = isInCart;
    this.isInStock = isInStock;

    function isInCart(product) {
      return this.cart.find(cartProduct => {
        return cartProduct.id === product.id
      });
    }
    
    function isInStock(product) {
     return product.amount > 0;
    }
  },
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
}