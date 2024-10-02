import './styles.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex flex-col fixed right-0 border border-gray-300 rounded-s-lg shadow-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl '>My Order</h2>
        <div
          className='rounded-full cursor-pointer active:bg-gray-200 hover:bg-gray-200'
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <XMarkIcon className='size-6' />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll divide-y flex-1'>
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
      <div className='px-6  mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to={'/my-orders/'}>
          <button
            className='w-full py-3 rounded-lg font-bold bg-black hover:bg-gray-800 active:bg-gray-700 text-white disabled:bg-gray-600 disabled:select-text'
            onClick={() => handleCheckout()}
            type='button'
            disabled={!context.cartProducts.length}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
