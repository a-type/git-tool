import { takeEvery, call, put } from 'redux-saga/effects';
import actions from 'actions/git/status';
import createGit from 'services/git';
import gitSaga from 'sagas/util/gitSaga';

export function* handleGet(action, git) {
  const status = yield call(git.status);
  yield put(actions.get.done(status));
}

export default function* () {
  yield takeEvery(actions.get.call, gitSaga(handleGet));
}
