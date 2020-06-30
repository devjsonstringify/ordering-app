import React from 'react';
import { v4 as uuidv4 } from 'uuid';

//import local files
import img from './../../Assets/images/cake.png';
import CategoryDetails from './CategoryDetails';

export default function Category({ data }) {
  const categories = [
    {
      name: 'Hot',
      thumbnail: img,
    },
    {
      name: 'Burger',
      thumbnail: img,
    },
    {
      name: 'Pizza',
      thumbnail: img,
    },
    {
      name: 'Snacks',
      thumbnail: img,
    },
    {
      name: 'Soft Drinks',
      thumbnail: img,
    },
    {
      name: 'Ice cream',
      thumbnail: img,
    },
  ];
  return (
    <div className='container-fluid'>
      <div className='row row-cols-6 '>
        {categories.map((category) => (
          <div key={uuidv4()} className='col'>
            <CategoryDetails data={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
