import React from 'react'
import logo  from '@/assets/images/logo.png'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Adam Shafi',
    text:
      "I absolutely love the beaded bangles from this seller! They are the perfect addition to any outfit and always receive compliments when I wear them. Plus, the pricing plans make it easy to order for my organization.",
  },
  {
    name: 'Adam Shafi',
    text:
      "I ordered a set of beaded bangles and waist beads for a family gathering, and they were a hit! Everyone loved the vibrant colors and intricate designs. They added a sense of tradition and celebration to our event. Thank you for providing such authentic African accessories.",
  },
  {
    name: 'Adam Shafi',
    text:
      "I recently purchased a set of African beaded bangles as a gift for my friend's birthday, and she was absolutely thrilled. The quality and authenticity of these accessories are unmatched. It's a gift that carries the essence of African culture and heritage.",
  },
];

const Testimonial = () => {
  return (
    <div className=' mt-20'>
      <h2 className='text-center pt-8 font-extrabold text-2xl underline underline-offset-1'>
        WHAT OUR HAPPY CUSTOMERS ARE SAYING!
      </h2>
      <div className='grid grid-cols-1 p-8 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='rounded-lg sm:w-full bg-slate-200 lg:h-[290px] px-6 py-3 lg:w-[300px]'
          >
            <Image
              src={logo} // Replace with the actual image source
              alt='profile'
              className='rounded-full items-center h-8 w-8 border-2 border-red-200'
            />
            <h4>{testimonial.name}</h4>
            <p className='text-start'>{`"${testimonial.text}"`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
