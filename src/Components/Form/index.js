import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ handleFormSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div className='submit-form'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type='text'
          placeholder='name'
          name='name'
          ref={register({ required: true, maxLength: 80 })}
        />
        {errors.name && 'name is required'}
        <input
          type='text'
          placeholder='description'
          name='description'
          ref={register({ required: true, maxLength: 100 })}
        />
        {errors.description && 'description is required'}
        <select name='category' ref={register({ required: true })}>
          <option defaultValue='category-1'>category-1</option>
          <option value='category-2'> category-2</option>
          <option value='category-3'> category-3</option>
          <option value='category-4'> category-4</option>
        </select>
        {errors.category && 'category is required'}
        <input
          type='number'
          placeholder='price'
          name='price'
          ref={register({ required: true, pattern: /\d+(\.\d{2})?/i })}
        />
        {errors.price && 'Price is required'}

        <input type='submit' />
      </form>
    </div>
  );
}
