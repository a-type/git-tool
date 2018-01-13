import { combineReducers } from 'redux';
import status from './status';
import commits from './commits';
import links from './links';

export default combineReducers({
  status,
  commits,
  links,
});
