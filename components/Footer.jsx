import React from 'react';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mt-18  footer-container items-center justify-center grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Column 1: Names and Roles */}
      <div className="md:col-span-21 ml-10">
        <h4 className="font-semibold">Team:</h4>
        <ul className="list-none ml-4">
          <li>Jacob Rotich - Founder, head of design</li>
          <li>+254797468010</li>
          <li>Cheruiyot Chebet - Product manager and Logistics coordinator</li>
          <li>+254745382981</li>
        </ul>
      </div>

          {/* Column 3: Locations */}
      <div className="md:col-span-1">
        <h4 className="font-semibold">Our Locations:</h4>
        <ul className="list-none ml-4">
          <li>Nairobi</li>
          <li>San Francisco</li>
        </ul>
      </div>

      {/* Column 4: Social Media Links */}
      <div className="md:col-span-1 flex flex-col items-center ">
        <h4 className="font-semibold">Social Media:</h4>
        <ul className="list-none mt-2">
          <li>
            <Link className="flex items-center" href="https://twitter.com/AfricaJari">
                <AiOutlineTwitter />
                <span className="ml-2">Twitter</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center" href="https://www.facebook.com/profile.php?id=100063727375128">
                <AiFillFacebook />
                <span className="ml-2">Facebook</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <p className="col-span-4 text-center mt-4">
        &copy; {new Date().getFullYear()} Jari Africa. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
