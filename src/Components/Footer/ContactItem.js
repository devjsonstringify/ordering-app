import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Thumb from '../Thumb';

// eslint-disable-next-line react/prop-types
function ContactItem({ items: { icon, description } }) {
  return (
    <li className="list-group-item bg-transparent pl-0 pb-0 d-flex">
      <Thumb thumbnail={icon} />
      <button type="button" className="bg-transparent border-0 ml-3">
        <span>{description}</span>
      </button>
    </li>
  );
}

ContactItem.propsTypes = {
  items: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
