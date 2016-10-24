
import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import user from './user';
import list from './list';
import escolaSabatina from './escolaSabatina';

export default combineReducers({

  drawer,
  route,
  user,
  list,
  escolaSabatina,

});
