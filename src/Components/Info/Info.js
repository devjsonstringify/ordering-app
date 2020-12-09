/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import local files
import './style.scss';

function Info({ thumbnail, header, description, LinkText, LinkTo, children, ...rest }) {
  return (
    <div className="container text-center info-component d-flex ">
      <div className="m-auto">
        <h4>{header}</h4>
        <p>{description}</p>
        <p className="d-block my-5">
          <Link to={LinkTo} className="rounded-pill">
            {children}
            {LinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}

Info.defaultProps = {
  thumbnail: '',
  header: '',
  description: '',
  LinkText: '',
  LinkTo: '/',
};
Info.propTypes = {
  thumbnail: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  LinkText: PropTypes.string,
  LinkTo: PropTypes.string,
  children: PropTypes.node,
};
export default Info;
