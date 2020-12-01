/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';

// import local files
import './style.scss';

function Hero({ quote, source, image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${
          image || 'https://source.unsplash.com/collection/29699674/1280x900'
        })`,
      }}
      className="hero-image justify-content-center d-flex align-items-center"
    >
      <figure className="text-center text-break w-75 ">
        <blockquote className="blockquote">
          <p className="display-6">{quote}</p>
        </blockquote>
        <figcaption className="blockquote-footer text-center mr-5 mt-2">
          <cite title={source}>{source} </cite>
        </figcaption>
      </figure>
    </div>
  );
}

Hero.propTypes = {
  quote: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
