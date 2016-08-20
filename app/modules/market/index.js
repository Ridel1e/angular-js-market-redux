/**
 * Created by ridel1e on 16/08/16.
 */

import module from './module';

import routes from './routes';
routes(module);

import containers from './containers';
containers(module);

import components from './components';
components(module);

export default module.name;