/**
 * Created by ridel1e on 18/08/16.
 */

import entityTable from './entity-table';
import productFrom from './product-form';

export default (ngModule) => {
  entityTable(ngModule);
  productFrom(ngModule);
}