import { fork, all } from 'redux-saga/effects';
import status from './status';
import log from './log';

export default function* () {
  yield all([
    status,
    log,
  ].map(fork));
}
