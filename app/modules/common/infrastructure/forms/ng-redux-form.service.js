/**
 * Created by ridel1e on 27/08/16.
 */

import * as actionTypes from "./action-types";

const PROVIDER_NAME = 'ngReduxForm';

const provider = () => {
  const FORM_INITIAL_STATE = {
    invalid: false,
    valid: true
  };

  const FIELD_INITIAL_STATE = {
    value: "",
    invalid: false,
    valid: true,
    errors: {}
  };

  let forms = {};

  return {
    createFormReducer: createFormReducer,
    $get: ['$rootScope', '$ngRedux', 'formActions', 'formValidator', ($rootScope, $ngRedux, formActions, formValidator) => {
      return {
        connect: connect
      };

      function connect(formName, form) {
        formValidator.setFormValidation(form, forms[formName].validations);

        let actions = {};
        $ngRedux.connect(null, formActions)(actions);

        let formData = forms[formName];

        formData.fields.forEach(fieldName => {
          $rootScope.$watchCollection(() => {
            return form[fieldName]
          }, () => {
            actions.changeFieldProperty(formName, form[fieldName])
          })
        });
      }
    }]
  };

  function createFormReducer(formName, formFields, formValidations) {
    saveFormData(formName, formFields, formValidations);

    let currentFormInitialState = Object.assign({}, FORM_INITIAL_STATE);

    formFields.forEach(fieldName => {
      currentFormInitialState[fieldName] = Object.assign({}, FIELD_INITIAL_STATE);
    });

    return (state = currentFormInitialState, action) => {
      if((action.payload || {}).formName !== formName) {
        return state;
      }

      switch (action.type) {
        case actionTypes.SET_FIELD_VALUE:
          return Object.assign({}, state, {
            [action.payload.fieldName]: setFieldValue(state[action.payload.fieldName], action)
          });

        case actionTypes.SET_FIELD_ERRORS:
          return Object.assign({}, state, {
            [action.payload.fieldName]: setFieldErrors(state[action.payload.fieldName], action)
          });

        case actionTypes.SET_FIELD_VALIDITY:
          return Object.assign({}, state, {
            [action.payload.fieldName]: setFieldValidity(state[action.payload.fieldName], action)
          });

        case actionTypes.SET_FORM_VALIDITY:
          return Object.assign({}, state, {
            valid: action.payload.validity,
            invalid: !action.payload.validity
          });

        default:
          return state;
      }
    }
  }

  function saveFormData(formName, fields, validations) {
    forms[formName] = {
      fields,
      validations
    }
  }

  function setFieldValue(state, action) {
    return Object.assign({}, state, {
      value: action.payload.value
    });
  }

  function setFieldErrors(state, action) {
    let errors = Object.assign({}, action.payload.errors);

    return Object.assign({}, state, {
      errors
    });
  }

  function setFieldValidity(state, action) {
    return Object.assign({}, state, {
      valid: action.payload.validity,
      invalid: !action.payload.validity
    })
  }
};

export default (ngModule) => {
  ngModule
    .provider(PROVIDER_NAME, provider);
}
