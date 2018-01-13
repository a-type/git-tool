import { fork, all } from 'redux-saga/effects';
import status from './status';

export default function* () {
  yield all([
    status,
  ].map(fork));
}
