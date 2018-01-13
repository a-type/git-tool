import { call, select } from 'redux-saga/effects';
import createGit from 'services/git';
import getRepo from 'actions/utils/getRepo';
import selectors from 'selectors/repos';
import mirrorRepo from './mirrorRepo';

/**
 * Provides a second parameter, git, which is connected to the
 * repo which initiated the saga.
 *
 * Mirrors repo id to all outgoing actions.
 */
export default saga => mirrorRepo(function* (action) {
  const repoId = yield call(getRepo, action);
  const selector = yield call(selectors.createDirSelector, repoId);
  const dir = yield select(selector);
  const git = yield call(createGit, dir);
  yield* saga(action, git);
});
