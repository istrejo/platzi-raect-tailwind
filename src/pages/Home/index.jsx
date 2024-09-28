import React from 'react';
import Card from '../../components/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import ProductDetail from '../../components/ProductDetail';

import './styles.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // console.log('Products: ', data);
      });
  }, []);
  return (
    <Layout>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg place-items-center'>
        {products?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
