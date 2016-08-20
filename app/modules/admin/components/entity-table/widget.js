/**
 * Created by ridel1e on 18/08/16.
 */

const COMPONENT_NAME = 'entityTable';

const component = {
  templateUrl: './app/modules/admin/components/entity-table/template.html',
  
  bindings: {
    columns: '<',
    items: '<',
    removeItem: '&onItemRemoveButtonClick',
    selectedItem: '=',
    selectItem: '&onItemSelect'
  },
  
  controller: function () {
    this.isSelectedItem = function (item) {
      return this.selectedItem.id === item.id;
    }
  },
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};
