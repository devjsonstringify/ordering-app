import React from 'react';

//import local files
import style from './index.module.scss';
import Food from './../../Assets/images/cake.png';

export default function CardItem({ data }) {
  return (
    <div className='col rounded '>
      <div className='card p-4'>
        <img className={`text-center ${style.img}`} src={Food} alt='name'></img>
        <div className='card-body text-primary text-center'>
          <h5 className='card-title text-dark'>{data.name}</h5>
          <p className='card-text'>${data.price}</p>
        </div>
      </div>
    </div>
  );
}
