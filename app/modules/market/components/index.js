/**
 * Created by ridel1e on 20/08/16.
 */

import productList from './product-list';
import cart from './cart';

export default (ngModule) => {
  productList(ngModule);
  cart(ngModule);
}