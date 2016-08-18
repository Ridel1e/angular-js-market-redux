/**
 * Created by ridel1e on 18/08/16.
 */

const CONTAINER_NAME = 'productTable';

const container = {
  template: 'hello'
};

export default (ngModule) => {
  ngModule
    .component(CONTAINER_NAME, container);
};