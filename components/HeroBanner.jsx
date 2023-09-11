import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/Sanity_ecommerce/sanity/lib/image';
import { client } from '../Sanity_ecommerce/sanity/lib/client';

async function getbannerData() {
  const bannerQuery = `*[_type == "banner"]`;
  const heroBanner = await client.fetch(bannerQuery);
  return heroBanner
};

const HeroBanner = async () => {
  const heroBanner = await getbannerData();
  console.log(heroBanner);
  {
    return (
      <div className='hero-banner-container'>
        {heroBanner.map((bannerData) => (
          <div key={bannerData._id}>
            <p className='beats-solo'>{bannerData.smallText}</p>
            <h3>{bannerData.midText}</h3>
            <img src={urlForImage(bannerData.image)}
              alt='hero-image'
              className='hero-banner-image' />
            <div>
              <Link href={`/product/${bannerData.product}`}>
                <button type="button">{bannerData.buttonText}</button>
              </Link>
              <div className="desc">
                <h5>Description</h5>
                <p>{bannerData.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

};

export default HeroBanner;
