import './styles.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

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
    </aside>
  );
};

export default CheckoutSideMenu;
