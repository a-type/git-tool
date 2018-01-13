import { takeEvery, call, put } from 'redux-saga/effects';
import actions from 'actions/git/log';
import createGit from 'services/git';
import gitSaga from 'sagas/util/gitSaga';

export function* handleGet(action, git) {
  const log = yield call(git.log, { from: action.payload.branch });
  yield put(actions.get.done(log));
}

export default function* () {
  yield takeEvery(actions.get.call, gitSaga(handleGet));
}
