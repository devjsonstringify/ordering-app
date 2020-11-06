import React from 'react';
import PropTypes from 'prop-types';

// import local files
import style from './index.module.scss';

function CategoryDetails({ thumbnail, name }) {
  return (
    <div className="col rounded">
      <div className="card p-4">
        <img className={`text-center ${style.img}`} src={thumbnail} alt="name" />
        <div className="card-body text-primary text-center">
          <p className="card-text">{name}</p>
        </div>
      </div>
    </div>
  );
}

CategoryDetails.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default CategoryDetails;
