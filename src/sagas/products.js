import * as productsActions from '../store/modules/products';
import { call, put, takeLatest } from 'redux-saga/effects';

export const fetchProducts = nextProductsApi => {
  return {
    type: productsActions.PRODUCT_DATA_FETCH,
    nextProductsApi
  };
};

function* fetchAllProducts(action) {
  const productsUrl = action.nextProductsApi;
  if (!productsUrl) {
    return;
  }
  const response = yield call(fetch, productsUrl);
  const products = yield response.json();

  yield put({
    type: productsActions.PRODUCT_DATA_LOAD,
    products: products.results,
    count: products.count,
    nextProducts: products.next
  });
}

function* productsSaga() {
  yield takeLatest(productsActions.PRODUCT_DATA_FETCH, fetchAllProducts);
}

export default productsSaga;
