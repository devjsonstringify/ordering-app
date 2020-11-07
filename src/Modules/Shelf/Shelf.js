// import library
import React from 'react';
import { useSelector } from 'react-redux';
// state management files
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// import local files
import ProductList from './ProductList';
import Spinner from '../../Components/Spinner';
import Layout from '../../Components/Layout/Layout';
import Filter from './Filter';
import { selectQuery } from '../../Ducks/Selectors/selectQuery';
import SearchProduct from './SearchProduct';

function Shelf() {
  useFirebaseConnect([{ path: 'products' }]);
  const products = useSelector((state) => selectQuery(state));
  if (!isLoaded(products)) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout>
      <SearchProduct />
      <Filter />

      {isEmpty(products) ? (
        <div className="align-items-center d-flex justify-content-center p-5">
          <p className="text-center">
            {' '}
            <span role="img" aria-label="sad-face">
              &😪
            </span>{' '}
            Sorry we cannot find your item.
          </p>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </Layout>
  );
}

export default {
  routeProps: {
    exact: true,
    path: '/',
    component: Shelf,
  },
  name: 'Shelf',
};

