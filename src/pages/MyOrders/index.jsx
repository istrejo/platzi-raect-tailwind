import { useContext } from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import OrdersCard from '../../components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center w-80  relative'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      <div className='mt-5'>
        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              id={index}
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
