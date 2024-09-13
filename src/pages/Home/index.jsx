import React from 'react';
import Card from '../../components/Card';
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg place-items-center'>
        {products?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
