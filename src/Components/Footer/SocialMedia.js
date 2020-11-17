/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-restricted-globals */

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// import local files
import Thumb from '../Thumb';
import twitter from '../../Assets/Icons/twitter.png';
import facebook from '../../Assets/Icons/facebook.png';
import instagram from '../../Assets/Icons/instagram.png';

export default function SocialMedia() {
  const sm = [
    { link: 'https://twitter.com/?lang=en', description: twitter },
    { link: 'https://www.facebook.com/', description: facebook },
    { link: 'https://www.instagram.com/', description: instagram },
  ];
  return (
    <div className="col footer_social_media p-0">
      <ul className="list-group list-group-horizontal justify-content-end">
        {sm.map(({ link, description }) => (
          <li key={uuidv4()} className="list-group-item bg-transparent">
            <a href={link} rel="noreferrer noopener" target="_blank" title={description}>
              <Thumb size="xsmall" thumbnail={description} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
