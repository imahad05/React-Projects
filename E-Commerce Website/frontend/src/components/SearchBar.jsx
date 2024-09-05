import React, { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useShop();
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-green-50 text-center">
      <div className="inline-flex items-center gap-1 justify-center border border-gray-400 px-5 py-2 rounded-full mx-3 my-5 w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm lowercase"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} alt="" className="w-4 cursor-pointer" />
      </div>
      <img
        src={assets.cross_icon}
        alt=""
        className="inline w-4 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
