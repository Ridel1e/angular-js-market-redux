/**
 * Created by ridel1e on 27/08/16.
 */

import actions from "./actions";
import ngReduxForm from "./ng-redux-form.service";

export default (ngModule) => {
  actions(ngModule);
  ngReduxForm(ngModule);
}