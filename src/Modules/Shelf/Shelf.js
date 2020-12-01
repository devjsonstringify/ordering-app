// import library
import React from 'react';
import { useSelector } from 'react-redux';
// state management files
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// import local files
import SkeletonProducts from '../../Components/SkeletonLoader/ProductListingLoader';
import ProductList from './ProductList';
import Layout from '../../Components/Layout/Layout';
import Filter from './Filter';
import selectQuery from '../../Ducks/Selectors/selectQuery';
import SearchProduct from './SearchProduct';
import Hero from '../../Components/Hero';
import heroImage from '../../Assets/images/hero.jpg';

function Shelf() {
  useFirebaseConnect([{ path: 'products' }]);
  const products = useSelector((state) => selectQuery(state));
  if (!isLoaded(products)) {
    return (
      <Layout>
        <SkeletonProducts />
      </Layout>
    );
  }
  return (
    <Layout>
      <Hero
        quote="Fish is the only food that is considered spoiled once it smells like what it is. "
        image={heroImage}
        source="P. J. O'Rourke"
      />
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
