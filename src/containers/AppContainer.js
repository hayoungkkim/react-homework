import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../sagas/products';

import ScrollTab from '../components/ScrollTab';
import ProductList from '../components/ProductList';

const Loader = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: center;
`;

const AppContainer = () => {
  const dispatch = useDispatch();
  const { isFetching, products, nextProducts } = useSelector(
    state => ({
      isFetching: state.products.isFetching,
      products: state.products.products,
      nextProducts: state.products.nextProducts
    }),
    []
  );

  const loader = useRef(null);

  const loadMore = useCallback(
    entries => {
      const target = entries[0];
      if (target.isIntersecting && nextProducts) {
        !isFetching && dispatch(fetchProducts(nextProducts));
      }
    },
    [isFetching, nextProducts, dispatch]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };

    const observer = new IntersectionObserver(loadMore, options);

    if (loader && loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.unobserve(loader.current);
  }, [loader, loadMore]);

  return (
    <>
      <ScrollTab />
      <ProductList products={products} />
      <Loader ref={loader}>
        <BeatLoader color={'#9880ff'} loading={isFetching} />
      </Loader>
    </>
  );
};

export default AppContainer;
