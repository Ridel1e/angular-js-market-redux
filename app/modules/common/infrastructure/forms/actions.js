/**
 * Created by ridel1e on 27/08/16.
 */

import * as actionTypes from "./action-types";

const ACTIONS_NAME = 'formActions';

const actions = () => {
  return {
    changeFieldProperty: changeFieldProperty
  };

  function changeFieldProperty(formName, field) {
    return (dispatch, getState) => {
      dispatch(setFieldValue(field.$name, formName, field.$viewValue));

      let currentForm = getState()[formName];
      let currentField = currentForm[field.$name];

      if(!isEqual(currentField.errors, field.$error)) {
        dispatch(setFieldErrors(field.$error, field.$name, formName));

        if(currentField.valid !== field.$valid) {
          dispatch(setFieldValidity(field.$name, formName, field.$valid));
        }

        if(currentForm.valid !== field.$$parentForm.$valid) {
          dispatch(setFormValidity(formName, field.$$parentForm.$valid));
        }
      }
    }
  }

  function setFieldValue(fieldName, formName, value) {
    return {
      type: actionTypes.SET_FIELD_VALUE,
      payload: {
        fieldName,
        formName,
        value
      }
    }
  }

  function setFieldErrors(errors, fieldName, formName) {
    return {
      type: actionTypes.SET_FIELD_ERRORS,
      payload: {
        errors,
        fieldName,
        formName
      }
    }
  }

  function setFieldValidity(fieldName, formName, validity) {
    return {
      type: actionTypes.SET_FIELD_VALIDITY,
      payload: {
        fieldName,
        formName,
        validity
      }
    }
  }

  function setFormValidity(formName, validity) {
    return {
      type: actionTypes.SET_FORM_VALIDITY,
      payload: {
        formName,
        validity
      }
    }
  }

  function isEqual(object1, object2) {
    return JSON.stringify(object1) === JSON.stringify(object2);
  }
};

export default (ngModule) => {
  ngModule
    .service(ACTIONS_NAME, actions);
}