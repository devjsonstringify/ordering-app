// import react library
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import local files
import './style.scss';
import { VisibilityFilters, setVisibilityFilter } from '../../../../Ducks/Features/FilterSlice';

import Category from '../Category';

export default function CategoriesList() {
  const [products] = useState(
    Object.entries(VisibilityFilters)
      .map(([visibility]) => ({
        visibility,
      }))
      .map((obj) => ({
        ...obj,
        active: false,
      }))
  );
  const [isActive, setIsActive] = useState('ALL');
  const dispatch = useDispatch();

  return (
    <div className="container product-categories ">
      <div className={`row `}>
        {products.map((item) => {
          const { visibility, active } = item;
          return (
            <Category
              key={uuidv4()}
              visibility={visibility}
              active={active}
              handleClick={(e) => {
                // eslint-disable-next-line no-unused-expressions
                e.preventDefault;
                setIsActive(visibility);
                dispatch(setVisibilityFilter(visibility));
              }}
              btn={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}

/*
Credits: Below are the links helps me with this specific scenario
https://stackoverflow.com/questions/55518798/how-to-add-active-class-to-clicked-item-in-reactjs
https://stackoverflow.com/questions/38922998/add-property-to-an-array-of-objects
*/
