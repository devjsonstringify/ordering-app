import React from 'react';
import { v4 as uuidv4 } from 'uuid';

//import local files
import Card from './CardItem.js';

export default function index({ data }) {
  return (
    <div className='container-fluid'>
      <header className='d-flex'>
        <h4 className='font-weight-bold text-dark mr-3'>Choose</h4>
        <h4> Order</h4>
      </header>
      <div className='row row-cols-4 g-4'>
        {data.map((content) => (
          <Card key={uuidv4()} data={content} />
        ))}
      </div>
    </div>
  );
}
