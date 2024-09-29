import './styles.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log('CART: ', context.cartProducts);

  const total = totalPrice(context.cartProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex flex-col fixed right-0 border border-gray-300 rounded-s-lg shadow-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl '>My Order</h2>
        <span>{total}</span>
        <div
          className='rounded-full cursor-pointer active:bg-gray-200 hover:bg-gray-200'
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <XMarkIcon className='size-6' />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll divide-y'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
