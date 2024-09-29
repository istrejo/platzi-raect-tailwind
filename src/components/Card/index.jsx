import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon, CheckIcon } from '@heroicons/react/16/solid';

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id)
        .length > 0;

    if (isInCart) {
      return (
        <div className='absolute  top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 text-lg font-bold active:bg-gray-100'>
          <CheckIcon className='size-5  text-white ' />
        </div>
      );
    } else {
      return (
        <div
          className='absolute  top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-lg font-bold active:bg-gray-100'
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className='size-5 text-black' />
        </div>
      );
    }
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
          alt={data.title}
        />
        {renderIcon(data.id)}
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
