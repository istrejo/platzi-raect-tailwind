import './styles.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { useState } from 'react';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  // Image format error
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden '
      }  product-detail  flex flex-col fixed right-0 border border-gray-300 rounded-s-lg shadow-lg bg-white `}
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
          src={
            !imageError
              ? context.productToShow.images
              : 'https://isto.pt/cdn/shop/files/Heavyweight_Black_ef459afb-ff7a-4f9a-b278-9e9621335444.webp?v=1710414950'
          }
          alt={context.productToShow.title}
          onError={handleImageError}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>
          ${context.productToShow.price}
        </span>
        <span className='font-medium  text-md'>
          {context.productToShow.title}
        </span>
        <span className='font-light  text-sm '>
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
