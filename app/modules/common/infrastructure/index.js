/**
 * Created by ridel1e on 16/08/16.
 */

import product from "./product";
import selectedProduct from "./selected-product";
import order from "./order";
import forms from "./forms";

export default (ngModule) => {
  product(ngModule);
  selectedProduct(ngModule);
  order(ngModule);
  forms(ngModule);
};