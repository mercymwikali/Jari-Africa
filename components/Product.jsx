import React from 'react'
import { client } from '../Sanity_ecommerce/sanity/lib/client';
import Link from 'next/link';
import { urlForImage } from '@/Sanity_ecommerce/sanity/lib/image';
import Image from 'next/image';

async function getproductsData() {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return products
};

const Product = async () => {
  const products = await getproductsData();

  return (
    <div className=' ml-6 p-20'>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product.slug.current}`} className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
              <Image
                src={product.image && product.image[0] ? urlForImage(product.image[0]).url() : ''}
                alt={product.name}
                width={225}
                height={280}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium ">{product.name}</h3>
            <div className='inline-flex'>
              <p className="mt-2 font-bold">{product.currency}</p>
            <p className="mt-2 font-bold pl-1">{product.price}</p>
            </div>            
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Product