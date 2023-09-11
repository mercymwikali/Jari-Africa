import { urlForImage } from '@/Sanity_ecommerce/sanity/lib/image'
import React from 'react'
import Link from 'next/link'

const SellerProducts = ({ products }) => {
    return (
        <div className='products-container'>
            {products.map((product)=>{
                <Link href={`/product/${product.slug.current}`}>
                <div className="product-card">
                    <Image
                        src={urlForImage(product.image && product.image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                    />

                </div>
            </Link>
            })}
            
        </div>
    )
}

export default SellerProducts