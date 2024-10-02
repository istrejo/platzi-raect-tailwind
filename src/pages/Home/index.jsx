import { useContext } from 'react';
import Card from '../../components/Card';

import Layout from '../../components/Layout';
import ProductDetail from '../../components/ProductDetail';

import './styles.css';
import { ShoppingCartContext } from '../../Context';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredProducts?.length) {
      return context.filteredProducts?.map((product) => (
        <Card key={product.id} data={product} />
      ));
    } else {
      return <p className='text-lg '>We dont have anything :(</p>;
    }
  };

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 mb-5'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        className='border-2 border-gray-300 w-[350px] rounded-lg px-3 py-2 mb-5 focus:border-gray-800 focus:outline-none focus:border-2'
        type='text'
        placeholder='Search a product'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg place-items-center'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
