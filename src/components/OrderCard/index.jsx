import { XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

const OrderCard = (props) => {
  const { id, title, price, imageUrl, handleDelete } = props;

  // Image format error
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className=' flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={
              !imageError
                ? imageUrl
                : 'https://isto.pt/cdn/shop/files/Heavyweight_Black_ef459afb-ff7a-4f9a-b278-9e9621335444.webp?v=1710414950'
            }
            alt={title}
            onError={handleImageError}
          />
        </figure>
        <p className='text-sm font-light '>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon
          onClick={() => handleDelete(id)}
          className='size-5 hover:bg-gray-300 rounded-full active:bg-gray-400'
        />
      </div>
    </div>
  );
};

export default OrderCard;
