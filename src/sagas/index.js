import { put, takeLatest, all } from 'redux-saga/effects';

//When user click button, then action call actionWatcher in saga,
//after this will call fetchNews function.
function* fetchNews() {
  // const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  const json = yield fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>   response.json() );
    
  // yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });
  yield put({ type: "NEWS_RECEIVED", json: json[0] });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
