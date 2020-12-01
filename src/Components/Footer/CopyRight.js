import React, { useEffect, useState } from 'react';
import getYear from 'date-fns/getYear';
import { Link } from 'react-router-dom';

export default function CopyRight() {
  const [copyRight, setCopyRight] = useState('');

  useEffect(() => {
    setCopyRight(getYear(new Date()));
  }, []);
  return (
    <div className="container-fluid h-25 p-5 text-center">
      <h6>
        Made with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        by{' '}
        <Link to={{ pathname: 'https://github.com/devjsonstringify' }} target="_blank">
          dev.json.stringify
        </Link>
      </h6>
      <h6 className="text-center">
        Copyright<span className="h5 mx-2">&copy;</span>
        {copyRight}. All Right Reserved
      </h6>
    </div>
  );
}
