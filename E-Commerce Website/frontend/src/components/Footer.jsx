import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas
            ad vero deleniti aliquid vitae eius, fugiat debitis illo iusto?
          </p>
        </div>

        <div>
          <p className="font-medium text-xl mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92 3092509757</li>
            <li>foreverinfo@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="bg-gray-300 h-[1px] border-none w-full" />
        <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
