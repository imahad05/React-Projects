import React from "react";
import { useShop } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ img, id, name, price }) => {
  const { currency } = useShop();

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={img[0]}
          alt=""
          className="hover:scale-110 ease-in-out transition"
        />
      </div>
      <p className="text-sm pb-1 pt-3">{name}</p>
      <p className="text-sm font-medium">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
