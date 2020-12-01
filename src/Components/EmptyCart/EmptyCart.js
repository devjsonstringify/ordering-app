import React from 'react';

// import local file
import './style.scss';
import Info from '../Info';
import Hero from '../Hero';
import heroImage from '../../Assets/images/veg.jpg';

export default function EmptyCart() {
  return (
    <>
      <Hero
        quote="I don't eat lobsters, shrimp, or crawfish because I don't eat anything that looks like I should step on it. "
        image={heroImage}
        source="George Carlin"
      />
      <Info
        header="Your shopping cart is currently empty"
        description="You need to add products to it, then I show your cart."
        LinkTo="/"
        LinkText="shop page"
        size="medium"
      />
    </>
  );
}
