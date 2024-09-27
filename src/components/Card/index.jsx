import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = ({ data }) => {
  const { title, category, price, images, description } = data;

  const context = useContext(ShoppingCartContext);

  return (
    <div className='bg-white cursor-pointer w-56 h-62 rounded-lg shadow-md'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {category?.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={images[0]}
          alt={description}
        />
        <div
          className='absolute  top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-lg font-bold active:bg-gray-100'
          onClick={() => context.setCount(context.count + 1)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </figure>
      <p className='flex justify-between mb-2'>
        <span className='text-sm font-light mx-2 '>{title}</span>
        <span className='text-lg font-medium mr-2'>${price}</span>
      </p>
    </div>
  );
};

export default Card;
