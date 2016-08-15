/**
 * Created by ridel1e on 15/08/16.
 */

import module from './module';

import config from './config';
config(module);

import routes from './routes';
routes(module);

export default module.name;