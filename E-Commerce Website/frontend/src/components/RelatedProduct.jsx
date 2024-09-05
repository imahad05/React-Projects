import React, { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useShop();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let procductCopy = products.slice();
      procductCopy = procductCopy.filter(
        (product) => category === product.category
      );
      procductCopy = procductCopy.filter(
        (product) => subCategory === product.subCategory
      );

      setRelated(procductCopy.slice(0,5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title textOne={"related"} textTwo={"products"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  gap-y-6">
        {related.map((product, index) => (
          <ProductItem key={index} img={product.image} id={product._id} price={product.price} name={product.name}/>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
