import React from 'react';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/16/solid';

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductToCart = (productData) => {
    context.setCartProducts([...context.cartProducts, productData]);
    console.log('CART: ', context.cartProducts);
  };

  return (
    <div
      className='card bg-white cursor-pointer w-56 h-62 rounded-lg shadow-md  '
      onClick={() => showProduct(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category?.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.images}
          alt={data.description}
        />
        <div
          className='absolute  top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-lg font-bold active:bg-gray-100'
          onClick={() => addProductToCart(data)}
        >
          <PlusIcon className='size-5' />
        </div>
      </figure>
      <p className='flex justify-between mb-2'>
        <span className='text-sm font-light mx-2 '>{data.title}</span>
        <span className='text-lg font-medium mr-2'>
          ${data.price}
        </span>
      </p>
    </div>
  );
};

export default Card;
