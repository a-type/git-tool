import { combineReducers } from 'redux';

import git from './git';
import repos from './repos';

export default combineReducers({
  repos,
  git,
});
