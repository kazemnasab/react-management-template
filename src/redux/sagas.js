import { all } from 'redux-saga/effects';
import statusType from './status/saga';

export default function* rootSaga() {
  yield all([
    statusType(),
  ]);
}
