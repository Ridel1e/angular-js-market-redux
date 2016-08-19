/**
 * Created by ridel1e on 18/08/16.
 */

import productTable from './product-table';
import selectedProductFrom from './selected-product-form';

export default (ngModule) => {
  productTable(ngModule);
  selectedProductFrom(ngModule);
};