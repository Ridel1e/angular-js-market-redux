/**
 * Created by ridel1e on 18/08/16.
 */

import productTable from './product-table';
import orderTable from './order-table';
import selectedProductFrom from './selected-product-form';

export default (ngModule) => {
  productTable(ngModule);
  orderTable(ngModule);
  selectedProductFrom(ngModule);
};