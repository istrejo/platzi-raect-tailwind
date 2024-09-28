import React from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      }  product-detail  flex flex-col fixed right-0 border border-gray-300 rounded-s-lg shadow-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl '>Detail</h2>
        <div
          className='rounded-full cursor-pointer active:bg-gray-200 hover:bg-gray-200'
          onClick={() => context.closeProductDetail()}
        >
          <XMarkIcon className='size-6' />
        </div>
      </div>
      <figure className='px-3'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images}
          alt={context.productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>
          ${context.productToShow.price}
        </span>
        <span className='font-medium  text-md'>
          {context.productToShow.title}
        </span>
        <span className='font-light  text-sm'>
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
