import React from 'react';

// import local files
import '../style.scss';
import Info from '../../../Components/Info';
import Hero from '../../../Components/Hero';
import heroImage from '../../../Assets/images/lemon.jpg';

export default function EmptyReceipt() {
  return (
    <>
      <Hero
        quote="I'm not sure what makes pepperoni so good if it's the pepper or the oni."
        image={heroImage}
        source="Ulrik Stephens"
      />
      <Info
        header="Your shopping cart is currently empty"
        description="Your receipt is currently empty."
        LinkTo="/cart"
        LinkText="check out"
        size="medium"
      />
    </>
  );
}
