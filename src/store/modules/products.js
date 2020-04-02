export const PRODUCT_DATA_FETCH = 'products/FETCH';
export const PRODUCT_DATA_LOAD = 'products/LOAD';

const initState = {
  count: 0,
  nextProducts: 'https://www.swapi.co/api/people',
  products: [],
  isFetching: false
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_DATA_FETCH:
      return { ...state, isFetching: true };
    case PRODUCT_DATA_LOAD:
      return { ...state, isFetching: false, products: [...state.products, ...action.products], count: action.count, nextProducts: action.nextProducts };
    default:
      return state;
  }
};

export default productsReducer;
