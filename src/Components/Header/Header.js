import React from 'react';
import PropTypes from 'prop-types';

// import local file
import sass from './index.module.scss';

export default function Header({ classes, strong, regular, children }) {
  const style = ['row'];
  style.push(classes);

  return (
    <div className={style.join(' ')}>
      <div className="col-md-6  col-xs-12">
        <header className={`list-inline ${sass.header}`}>
          <h3 className="list-inline-item">
            {strong} <span>{regular}</span>
          </h3>
        </header>
      </div>
      <div className="col-md-6 col-xs-12 d-flex justify-content-end">{children}</div>
    </div>
  );
}
Header.defaultProps = {
  classes: '',
  strong: '',
  regular: '',
};

Header.propTypes = {
  classes: PropTypes.string,
  strong: PropTypes.string,
  regular: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
