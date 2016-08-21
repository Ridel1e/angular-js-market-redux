/**
 * Created by ridel1e on 18/08/16.
 */

const COMPONENT_NAME = 'entityTable';

const component = {
  templateUrl: './app/modules/admin/components/entity-table/template.html',
  
  bindings: {
    columns: '<',
    items: '<',
    actions: '<',
    removeItem: '&onItemRemoveButtonClick',
    selectedItem: '=',
    selectItem: '&onItemSelectButtonClick'
  },
  
  controller: function () {
    this.hasAction = function (action) {
      if(this.actions) {
        return this.actions.indexOf(action) !== -1
      }
      return false;
    };

    this.isSelectedItem = function (item) {
      if(this.selectedItem !== undefined) {
        return this.selectedItem.id === item.id;
      }
      return false;
    }
  },
  controllerAs: 'vm'
};

export default (ngModule) => {
  ngModule
    .component(COMPONENT_NAME, component);
};
