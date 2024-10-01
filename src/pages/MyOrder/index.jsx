import { useContext } from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order.slice(-1));

  return (
    <Layout>
      <h1>My Order</h1>
      <div className='flex flex-col w-80'>
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
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
