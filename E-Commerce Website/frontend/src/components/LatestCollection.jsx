import React, { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useShop();
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title textOne={"LATEST"} textTwo={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          nisi similique ut dolore error aliquam.
        </p>
      </div>

      {/* Rendering Products  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            name={product.name}
            img={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
