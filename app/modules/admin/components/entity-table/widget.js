/**
 * Created by ridel1e on 18/08/16.
 */

const COMPONENT_NAME = 'entityTable';

const component = {
  templateUrl: './app/modules/admin/components/entity-table/template.html',
  
  bindings: {
    items: '<',
    columns: '<',
    onItemSelect: '&',
    isSelectedItem: '&',
    removeItem: '&onItemRemoveButtonClick'
  },

  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};
