import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsFailure, getCatsSuccess, getCatsFetch } from "./catState";
// call call our url
// put allow us to call action
// takeEvery trigger action when fuction call

// const API_URL = "https://api.thecatapi.com/v1/breeds?limit=10";

function* workGetCatFetch() {
  try {
    const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShortened));
  } catch (error) {
    yield put(getCatsFailure(error.message));
  }
}
// console.log("getCatsFetc", getCatsFetch.type);

export function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatFetch);
}
