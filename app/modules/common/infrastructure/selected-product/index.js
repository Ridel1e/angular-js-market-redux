/**
 * Created by ridel1e on 18/08/16.
 */

import reducer from './reducer';
import actions from './actions';

export default (ngModule) => {
  reducer(ngModule);
  actions(ngModule);
}