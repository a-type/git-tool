import { takeEvery, call, put } from 'redux-saga/effects';
import actions from 'actions/git/status';
import createGit from 'services/git';
import mirrorRepo from 'sagas/util/mirrorRepo';

export function* handleGet(action) {
  const git = yield call(createGit, action.payload.dir);
  const status = yield call(git.status);
  yield put(actions.get.done(status));
}

export default function* () {
  yield takeEvery(actions.get.call, mirrorRepo(handleGet));
}
