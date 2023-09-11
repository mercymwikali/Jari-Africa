"use client"
import React from 'react';
import { client } from '../Sanity_ecommerce/sanity/lib/client';
import { Product, FooterBanner, HeroBanner, Footer, Navbar, Testimonial } from '../components';
import SellerProducts from '@/components/bestsellerproducts';


const Home = async () => {
 
  return (
    <div>
        <HeroBanner/>
      
      {/* <HeroBanner  heroBanner={heroBanner && heroBanner[0]}  /> */}
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        
      </div>

      <Product/>
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p></p>
      </div>
      {/* <SellerProducts/> */}
      <Testimonial/>


    </div>
  );
};


export default Home;
