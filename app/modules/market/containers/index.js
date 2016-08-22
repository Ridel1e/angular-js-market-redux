/**
 * Created by ridel1e on 20/08/16.
 */

import showcaseProductList from './showcase-product-list';
import showcaseCart from './showcase-cart';

export default (ngModule) => {
  showcaseProductList(ngModule);
  showcaseCart(ngModule);
}