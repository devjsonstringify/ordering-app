/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import local files
import iconTelephone from '../../Assets/Icons/phone.png';
import iconEmail from '../../Assets/Icons/email.png';
import ContactItem from './ContactItem';

const Contact = () => {
  const [getInTouch, setGetInTouch] = useState([]);

  useEffect(() => {
    setGetInTouch([
      ...getInTouch,
      { icon: iconEmail, description: 'email@gmail.com' },
      { icon: iconTelephone, description: '+00 12344444444444' },
    ]);
  }, []);

  return (
    <div className="border-top">
      <h5 className="w-50 my-5">Get in touch</h5>
      <ul className="list-group">
        {getInTouch.length > 0 &&
          getInTouch.map((contact) => {
            return <ContactItem key={uuidv4()} items={contact} />;
          })}
      </ul>
    </div>
  );
};

export default Contact;
