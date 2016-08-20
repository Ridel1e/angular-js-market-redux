/**
 * Created by ridel1e on 20/08/16.
 */

import api from './api';
import reducer from './reducer';
import actions from './actions';

export default (ngModule) => {
  api(ngModule);
  reducer(ngModule);
  actions(ngModule);
}