import React, { useState } from 'react';

// import local files
import Form from './Form';
import TutorialDataService from '../services/TutorialService';

const AddItem = () => {
  const initialState = {
    name: '',
    description: '',
    price: null,
    category: '',
  };

  const [tutorial, setTutorial] = useState(initialState);

  const saveTutorial = (data) => {
    TutorialDataService.create(data)
      .then((response) => {
        setTutorial({
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Form handleFormSubmit={saveTutorial} />
    </div>
  );
};

export default AddItem;
