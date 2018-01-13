import { all, fork } from 'redux-saga/effects';
import git from './git';

export default function* () {
  yield all([
    git,
  ].map(fork));
}
