import React from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/16/solid';

const ProductDetail = () => {
  return (
    <aside className='product-detail  flex flex-col fixed right-0 border border-black rounded-s-lg bg-white '>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl '>Detail</h2>
        <div>
          <XMarkIcon className='size-6' />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
