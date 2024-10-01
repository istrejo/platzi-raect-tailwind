import { useContext } from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../components/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const curretnPath = window.location.pathname;
  let index = curretnPath.substring(curretnPath.lastIndexOf('/') + 1);

  if (index === 'last') index = context.order.length - 1;

  return (
    <Layout>
      <div className='flex items-center justify-center w-80  relative'>
        <Link
          to='/my-orders'
          className='absolute left-0 rounded-full cursor-pointer active:bg-gray-200 hover:bg-gray-200'
        >
          <ChevronLeftIcon className='size-6' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 mt-5'>
        {context.order[index]?.products.map((product) => (
          <OrderCard
            key={index}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
