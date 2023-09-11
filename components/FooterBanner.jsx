import React from 'react';
import footerImage from '../assets/images/footerImage.jpeg';
import Image from 'next/image';

const FooterBanner = () => {
  return (
    <div>
      <div className=' block footer-banner-container  lg:flex '>
        <div className='lg:w-1/2 '>
          <Image
            src={footerImage}
            className='footer-banner-image'
            alt='footer image'
          />
        </div>
        <div className='sm:w-full pt-[500px] lg:pt-0 lg:w-1/2  text-center'>
          <h3 className='underline underline-offset-2 text-3xl font-bold tracking-wide pb-4 text-black'>WHY BUY FROM US!</h3>
          <p className='tracking-wide text-2xl font-light text-black'>
            Indulge in exquisite African jewelry from our ever-evolving
            collection. Pamper yourself with stunning pieces, and be sure to
            seize the opportunity promptly, as we continuously refresh our
            inventory with captivating options. Start shopping today to ensure
            you secure your preferred items.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
