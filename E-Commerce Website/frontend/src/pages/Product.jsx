import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { RelatedProduct } from "../components";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useShop();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3 ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((product, index) => (
              <img
                src={product}
                key={index}
                onClick={() => setImage(product)}
                className="w-[24%] sm:w-full cursor-pointer flex-shrink"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setSize(product)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    product === size ? "border-orange-500" : ""
                  }`}
                >
                  {product}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={() => addToCart(productData._id, size)}
          >
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 text-sm">Description</b>
          <p className="border px-5 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col border gap-4 px-6 py-6 text-sm text-gray-500">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            voluptas, esse, aperiam ullam quis aliquam rerum maxime ab adipisci
            illum rem facere non inventore repudiandae consequuntur omnis
            consequatur corporis incidunt? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Qui molestias dignissimos expedita
            optio atque culpa repellat consequuntur nobis quis tempore ipsa iure
            voluptas, debitis maiores delectus provident natus architecto omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            veritatis totam consequuntur sapiente tempora quibusdam veniam
            omnis, dolorem, illo quis ex sunt sed doloremque, provident in nisi
            maiores nihil earum?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            eligendi, expedita blanditiis hic illum ex! Eaque harum dicta
            tempore culpa, quos, minima error cum atque in aliquid reiciendis
            quo similique? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium molestias quisquam facere illo deleniti fuga
            fugit, ea provident placeat! Natus perspiciatis cum doloremque
            dolorum ea quae rerum non possimus architecto.
          </p>
        </div>
      </div>

      {/* relative product section */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Product;
