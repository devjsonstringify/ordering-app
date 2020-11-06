// import react library
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
// import local files
import style from './index.module.scss';
import Thumb from '../../../../Components/Thumb/Thumb';

export default function Category({visibility, btn, handleClick}) {
  const newProps = visibility.slice(5);
  const isActive = btn.slice(5) === newProps;
  const darkImage = isActive
    ? require(`../../../../Assets/Icons/${newProps.toLowerCase()}.png`)
    : require(`../../../../Assets/Icons/dark/${newProps.toLowerCase()}.png`);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`col mr-2 p-3 d-flex flex-column ${style.item} ${
        btn.slice(5) === newProps ? `${style.item__active}` : ''
      }`}
      role="button"
      tabIndex="0"
      onClick={handleClick}
    >
      <div className={isActive ? `p-1 border-white ${style.item__background}` : 'p-1 '}>
        <Thumb size="msmall" thumbnail={darkImage} />
      </div>
      <h6
        className={`text-center text-capitalize my-3 d-md-block d-none ${
          isActive ? 'text-body' : ' '
        }`}
      >
        {newProps.toLowerCase()}
      </h6>
    </div>
  );
}
Category.prototype = {
  filter: PropTypes.string,
  category: PropTypes.string,
  dispatch: PropTypes.func,
  visibility: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
