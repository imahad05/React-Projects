import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useShop();
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-32 md:w-36 lg:w-40 2xl:w-44 "
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-gray-700 text-sm 2xl:text-lg">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className={`w-2/4 border-none h-[2px] bg-gray-700 hidden`} />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className={`w-2/4 border-none h-[2px] bg-gray-700 hidden`} />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className={`w-2/4 border-none h-[2px] bg-gray-700 hidden`} />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className={`w-2/4 border-none h-[2px] bg-gray-700 hidden`} />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <Link to={'/login'}>
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 shadow shadow-slate-400">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-slate-500 rounded">
              <Link to="/profile" className="cursor-pointer hover:text-black">
                My Profile
              </Link>
              <Link to="/orders" className="cursor-pointer hover:text-black">
                Orders
              </Link>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="cursor-pointer w-5 min-w-5"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-2 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
