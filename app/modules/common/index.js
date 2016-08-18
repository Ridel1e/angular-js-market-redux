/**
 * Created by ridel1e on 16/08/16.
 */

import module from './module';

import components from './components';
components(module);

import containers from './containers';
containers(module);

import infrastructure from './infrastructure';
infrastructure(module);

export default module.name;